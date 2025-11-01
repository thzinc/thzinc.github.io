---
title: Hackaday Superconference 2025 – Days -7 through 1 - Design by contract
tags: electronics microcontrollers 3d_printing
---

Since this year's [Supercon][supercon] badge was announced along with its [mechanical designs][mechanical], I decided to make a custom case with LED nOOds in order to have it for the opening badge hacking day.

After a couple of iterations on designs–should I include "thzinc" in the design, should the LED encircle part of the keyboard, can I incorporate the [Jazz][jazz] woosh?–I landed on curves that give 80s neon vibes.

![A luminous cool blue zig zag streaks across a rectangle with a keyboard and short, wide screen. The case is a transparent rectangle with a channel to guide the LED strip into its shape.](/assets/supercon-2025-1-rendering.jpg)

Once I got the faceplate printed, I tested out pink and green in addition to blue. All of them were significantly better looking than in the renderings. I liked blue the best–despite photographing the poorest among the colors.

![Photo of faceplate illuminated with electric blue. In the foreground are the illuminated costume welding goggles with hot pink for contrast.](/assets/supercon-2025-1-test-fit.jpg)

For my own sake, I decided to take advantage of an extra power and IO breakout on the badge with a short wire that emerges from the faceplate and plugs into the back of the badge. I had wanted to access the breakout from the front, but I didn't have space in the design to incorporate a switch to turn the LED off, so I opted for a less permanent modification.

It took no time at all to immediately pull the badge out of its standard, well-constructed case, solder some headers to the extra breakout, and put it into its new case.

![Photo of work area on folding table at conference. The badge is shown without its rubber keyboard sheet, so there's just an array of silver dome switches. A screwdriver set is nearby with a collection of recently-removed screws. Two cardboard boxes complete a border around the work area, one labelled "Parts" and the other "Tools." ](/assets/supercon-2025-1-disassembly.jpg)

![Photo of reassembled badge in its new case illuminated with the blue LED strip.](/assets/supercon-2025-1-reassembly.jpg)

In between tinkering with the badge's firmware and fixing a few trivial bits, I got to chat with several folks. There was quite a lot of excitement around the LED strands: many people asked if they were EL wire. (EL wire requires particularly high voltage and can be challenging to incorporate into low-voltage systems like most electronic devices.)

I got to meet a few of my social media mutuals and excitedly gush IRL over other attendees' badge cases, shitty add-ons (SAOs), and all manner of geekery. I spotted at least two other folks with Aranet4 CO2 sensors, which also made me feel among peers.

Looking forward to a bunch of talks and a workshop tomorrow!

[supercon]: https://hackaday.io/superconference/
[mechanical]: https://github.com/Hack-a-Day/2025-Communicator_Badge/tree/main/hardware/mechanicals_and_models
[jazz]: https://en.wikipedia.org/wiki/Jazz_(design)
