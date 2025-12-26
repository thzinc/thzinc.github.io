---
title: IKEA VATTENSTEN low voltage 5V LED strip with Raspberry Pi Pico controller
tags: electronics programming microcontrollers ikea
---

I recently picked up a few [VATTENSTEN low voltage 5V LED strips](https://www.ikea.com/us/en/p/vattensten-led-light-strip-multicolor-50530592/) from IKEA because I figured they'd be easier to integrate into a USB-powered Raspberry Pi or Raspberry Pi Pico project. I was right!

![Photo of lights with assembled Pico carrier board](/assets/carrier-board-for-vattensten-led-strip.jpg)

The VATTENSTEN's power cord is a USB plug on one side, a small PCB capable of only very limited lighting options, and a custom slide-to-fit adapter for the silicone-coated LED strip. I cut the side of the cord with the proprietary adapter and put Dupont connectors on it to make it easier to prototype with.

Ultimately, I decided to build a small carrier board for a Raspberry Pi Pico and contain the circuitry under the socket for the Pico. I had a handy right-angle Dupont socket so I could plug the strip underneath the Pico and have the connector partially supported by the circuit board.

I did take the time to run the GPIO GPIO outputs into a 2222 NPN transistor so the LED strips current wasn't being pulled through the Pico. Instead, I used the Pico's VBUS on pin 40 to provide +5VDC to the strip, then connected ground from pin 3 to the emitters of each of the transistors. The Pico's GP5, GP6 and GP8 were the most conveniently-located pins (7, 9, and 11) to connect to each transistor's base, and I connected the collectors of each transistor to the LED strip's red, green, and blue connectors. (Like a few other strips I've seen, the order of the colors is irritatingly NOT red, green, blue.)

![Photo of completed carrier board without the Pico in place to show the components and wires](/assets/carrier-board-without-pico.jpg)

To validate it worked, I wrote a very simple CircuitPython script to quickly run through different colors using the Pico's PWM:

```python
import board
import pwmio
import time

red_led = pwmio.PWMOut(board.GP5, frequency=1000)
blue_led = pwmio.PWMOut(board.GP6, frequency=1000)
green_led = pwmio.PWMOut(board.GP8, frequency=1000)

while True:
    colors = [
        [0xFFFF, 0x0000, 0x0000], # Red
        [0x0000, 0xFFFF, 0x0000], # Blue
        [0x0000, 0x0000, 0xFFFF], # Green
        [0xFFFF, 0xFFFF, 0x0000], # Magenta
        [0x0000, 0xFFFF, 0xFFFF], # Yellow
        [0xFFFF, 0x0000, 0xFFFF], # Cyan
        [0xFFFF, 0xFFFF, 0xFFFF], # White
        [0x1FFF, 0x1FFF, 0x1FFF], # Dim white
    ]

    for r, g, b in colors:
        red_led.duty_cycle = r
        blue_led.duty_cycle = g
        green_led.duty_cycle = b
        time.sleep(0.25)

```

I'm particularly excited about tinkering with the Pico's hardware PWM because it's so much higher frequency than my current desk lighting setup that relies on `piblaster` for software-based PWM. (Little-to-no flicker with high frequencies!)
