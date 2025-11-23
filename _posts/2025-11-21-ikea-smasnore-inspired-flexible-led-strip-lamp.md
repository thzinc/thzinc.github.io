---
title: IKEA SMÅSNÖRE-inspired flexible LED strip lamp
tags: electronics microcontrollers 3d_printing
see_also:
  - url: https://www.thingiverse.com/thing:7209225
    title: Flexible LED strip lamp on Thingiverse
---

Whenever I'm at the [largest IKEA in North America][ikea-burbank], I spend the most time wandering through the lighting section. IKEA's LED lighting has been really interesting to see develop over several years and on my most recent visit I saw one of the coolest lights I've seen in a long time: [SMÅSNÖRE][smasnore].

![Fancam-style photo composition of the SMÅSNÖRE lamp, an illuminated ~80cm arch with round bases on either side](/assets/led-strip-lamp/fancam-collage.jpg)

It's a big translucent, wiggly silicone rubber rod with an LED strip embedded in it with weighted bases on either end to move it around. There seems to be a strip of some material to give it an arch with enough rigidity to hold itself up, and it provides the opportunity to focus the lighting downward toward the inside of the arch (good for focus lighting), or outward away from the arch (good for room/accent lighting). Like many of IKEA's LED strips, it's multicolor and has a simple program to select a fixed color or to smoothly cycle through the rainbow, and it has three stepped brightness settings.

After playing with it in-store for too long, I talked myself out of buying it. I could see the potential for diffuse workspace illumination but it wasn't quite bright enough–and also if it were brighter, the light would still shine in my eyes. I wanted something brighter that would also guide the light toward a work surface without blinding me. I also didn't need colors—despite their enticing appearance.

In my box of LEDs, I had a spare length of [480 LEDs-per-meter 12-volt LED strip](https://www.adafruit.com/product/4612) upon which I became fixated. I've used lengths of this strip all over, including on [my bike][bike-light-post]. The silicone cover on the strip was _nearly_ enough to provide the bendy-yet-elastic strength to hold itself in an arch. From working with this LED strip, I knew I could control its brightness with a Raspberry Pi Pico's PWM, and I had a nice old potentiometer I picked up from "Tina's Junk" at [last year's Hackaday Superconference][supercon] that I could read with the Pico's ADC. After a several days of debating myself over whether to integrate batteries or to power it externally, I decided to power it via USB-C PD so I could get 12 volts. And since I have a nice USB-C battery pack and also half a dozen USB-C wall warts, I'd have many options for powering the lamp.

I laid out a very basic circuit with the following parts:

- (1) [6cm x 4cm proto-board PCB](https://www.adafruit.com/product/4785)
- (2) [20-pin female headers](https://www.adafruit.com/product/4155)
- (1) [N-channel MOSFET](https://www.digikey.com/en/products/detail/stmicroelectronics/STD12NF06L-1/1039352)
- (1) [Raspberry Pi Pico](https://www.adafruit.com/product/4864)
- (1) [USB-C PD breakout with screw terminals](https://www.adafruit.com/product/5807)
- (1) [5 volt buck](https://www.adafruit.com/product/4739)
- (2) through-hole screw terminals (salvaged from some relay breakouts)
- (1) 3-pin [right angle headers](https://www.adafruit.com/product/1540)
- (1) potentiometer (salvaged; Allen Bradley 19-211473-502)

![Diagram of circuit showing Pico connected to potentiometer, MOSFET, and buck, along with the LED connected to the USB-C supply switched by the MOSFET](/assets/led-strip-lamp/circuit-diagram.png){:.invertable}

(I used KiCad for the first time to make this diagram. Hopefully I didn't totally misrepresent this circuit 😅)

I chose to assemble the circuit on a PCB with headers so I could eventually replace or reprogram the Pico, or swap out the potentiometer or power source later. It's not particularly compact, but it is repairable in a way I'm very comfortable with.

![Photo of assembled circuit board; the Pi Pico is prominent on top of the 6cm by 4cm PCB. Next to it are screw terminals at the fore and aft of the board. The terminals in the fore are connected to wires that are powering an illuminated LED strip. The terminals in the aft are connected to the USB-C PD breakout that is plugged into a cable that is plugged into a USB-C battery. A separate ribbon cable is running from underneath the Pi Pico to a potentiometer with a vintage knob.](/assets/led-strip-lamp/assembled-circuit.jpg)

I wrote some quick CircuitPython to read the voltage from the potentiometer through one of the Pico's ADC pins and then set the duty cycle on one of the Pico's PWM pins. There's definitely some optimization I could do here–especially since the ADC returns a constantly varying value–but this was good enough to produce a result I could move forward with.

```python
import time
import board
import analogio
import pwmio
import math

knob = analogio.AnalogIn(board.GP28_A2)
led = pwmio.PWMOut(board.GP22, frequency=1000)


def get_voltage(raw):
    return (raw * 3.3) / 65536


def get_pwm(raw):
    low = 0x1000
    high = 0xFF00
    val = min(max(low, raw), high)
    pct = min((val - low) / (high - low), 1)
    return math.ceil(pct * 0xFFFF)


while True:
    raw = knob.value
    pwm = get_pwm(raw)
    led.duty_cycle = pwm
    if pwm == 0:
        time.sleep(0.250)
```

With the electronics of the lamp settled, I spent a bunch of time on the design of the lamp. As a lamp I expected to use while making things, I wanted to make sure that parts were easily fixable or replaceable. I expected to 3D print the parts, and if a part broke, I wanted to minimize the size and complexity of the part that needed replacement.

I started with designing a solution to provide some additional rigidity to the LED strip while also shading the light from directly shining in my eyes. I took inspiration from bike chain covers and plastic chain wire guides in designing a chain link that to which the LED strip could be zip-tied. The chain link was a symmetrical, easily printable design and I could print as many links as I needed to cover the length of the LED strip.

![A detailed engineering diagram of a single chain link. Each link is 10.5mm tall, 31.5mm long, and 16.8mm wide. The diagram highlights the the chamfered pin and its through hole and through holes for zip ties in the base of link. Another callout indicates the link is constrained to a total of 120° of rotation around its pin. The link is designed to fit the width of a 10mm LED strip.](/assets/led-strip-lamp/schematic-chain-link.png){:.invertable}

The chain links assemble really easily and are really satisfying to play with on their own. (I have some extra links that make a great desk toy!) They're designed to take advantage of the fact that the LED strip is already encased in a rectangular silicone rubber case, so zip ties have a lot of high-friction surface to grab. The result of the two is a satisfyingly elastic structure that bends easily, but is able to hold itself upright in an arch. The chain links are even compliant enough to allow some lateral motion without stressing the assembly too much.

![Closeup photo of assembled LED strip in chain links](/assets/led-strip-lamp/chain-link-assembly-closeup.jpg)

With the LED strip assembly settled, I spent a bunch of time in Shapr3D playing with the arrangement of the electronics, fiddling with where the components would mount and working out how the parts would mate with one another. This was definitely a case where designing with parameters, well-defined constraints, and editable history was super helpful for iterating on the design. I focused most of my time on designing a profile that I could sweep into a circular shell, into which I added extrusions for heat-set inserts and cut holes for the potentiometer, USB-C port, and an adapter for the chain link.

![Screenshot of Shapr3D showing the profile with many defined dimensions, ultimately showing a half-profile of an elongated cone is just under 10cm by 10cm; on the right of the screenshot is a list of the file's history showing the various operations applied to the design.](/assets/led-strip-lamp/screenshot-shapr3d.png)

Since the bases were intended to be heavy enough to anchor the lamp, I figured that the point at which the chain links attach to the base might experience a lot of stress so I designed a separate replaceable mounting adapter to attach the chain links to the base with M3 bolts.

![A detailed engineering diagram of the "peg" and "receiver" adapters made to connect to either end of a chain link respectively. The adapters appear to be half a chain link with a 6mm thick block on the lower half. In that block are 3.2mm through-holes for M3 bolts to attach to the base's shell.](/assets/led-strip-lamp/schematic-chain-link-adapters.png){:.invertable}

One of my favorite "design polish" things to do is handle the shadow line when mating components. (I learned about this via Hackaday's [Enhance Your Enclosures With A Shadow Line][hackaday-blog-post] post.) The base's lid is a pretty simple flat circle, but I raised a 1mm shadow line along the inside to align the lid with the shell and prevent light from leaking out of the base.

![Cutaway rendering showing the shell and the lid mating with a shadow line](/assets/led-strip-lamp/shadow-line.png)

I installed the heat-set inserts and secured all the components in the housing. I'm particularly pleased with the fit.

![Photo looking into shell at the USB-C breakout, assembled circuit board, and potentiometer. There are short lengths of wire connecting the boards. Four brass heat-set inserts are visible along the rim of the shell.](/assets/led-strip-lamp/installed-components.jpg)

I put some anti-slip rug tape on the bottom of the lid to give the bases some extra traction so they stay in place–especially when stretching the LED strip over a wider distance.

![Photo of bottom of one base showing a rectangle of rug tape; the four small screws are visible that attach the lid to the shell](/assets/led-strip-lamp/bottom-with-rug-tape.jpg)

I'm very pleased with the result! The lighting is so nice. I can crank up the brightness when I need it. I can flip the lamp around to be an accent light when I'm not using it for focus. Holding the lamp by the chain and dangling the bases almost feels like [poi][wikipedia-poi]. (Though I don't think it would survive too much swinging around 😅) I love it!

![Photo of completed lamp focused on a soldering mat. An iFixit soldering iron is plugged into the battery next to the cable for the lamp itself. A small circuit board is sitting on the mat next to a spool of solder.](/assets/led-strip-lamp/final-soldering-setup.jpg)
![Photo of completed lamp focused on a coil of extra chain links](/assets/led-strip-lamp/final-chain-links.jpg)
![Closeup of coil of extra chain links showing the diffuse lighting and soft shadows](/assets/led-strip-lamp/final-chain-links-closeup.jpg)
![Closeup of the knob on the potentiometer. The knob has fluted ridges for grid and an inset round metal decor.](/assets/led-strip-lamp/final-knob-view.jpg)
![Closeup of the cloth braided USB-C cable plugged into the lamp.](/assets/led-strip-lamp/final-usb-view.jpg)
![Artistic photo of one side of the lamp showing the back of the illuminated LED strip extending straight up](/assets/led-strip-lamp/final-artsy-view.jpg)

[smasnore]: https://www.ikea.com/us/en/p/smasnoere-led-decorative-light-dimmable-adjustable-color-50597243/

[bike-light-post]: {% post_url 2025-01-06-bright-ground-and-area-bike-lighting %}
[supercon]: https://hackaday.io/superconference/
[hackaday-blog-post]: https://hackaday.com/2023/08/07/enhance-your-enclosures-with-a-shadow-line/
[wikipedia-poi]: https://en.wikipedia.org/wiki/Poi_(performance_art)
[ikea-burbank]: https://www.ikea.com/us/en/stores/burbank/
