---
title: My first year with a 3D printer
tags: 3d_printing
---

It's been a full year since I bought my [Sovol SV02][sovolsv02] printer. I'm sitting at my desk with at least a dozen printed objects around me: fidget toys, small art pieces, organization trays, and [electronics enclosures][multimeter]. The process of learning about modeling, manufacturing, and materials science has been fascinating (and occasionally frustrating).

Things I've learned:

- Printing requires a carefully-leveled bed. Using an auto-leveling sensor like a [BLTouch][bltouch] is useful for making the leveling process easy.
- The on-board controls are mediocre. [OctoPrint][octoprint] has so many useful features that completely supplant the printer's own interfaces and [OctoBalena][octobalena] makes the setup and running easy.
- The Sovol SV02 has a reasonable amount of extra room inside its chassis to house a Raspberry Pi, and its 24V power supply has plenty of extra current to run through a buck converter to power the Pi.
- Dual extrusion (printing in multiple materials and/or colors) is slow and requires a fair amount of waste, but the results are pretty neat.
- After designing and printing several objects, I now look at manufactured things differently. Most plastic objects are a fascinating mix of manufacturing and design tradeoffs.
- Getting fit tolerances right is satisfying in a deep way. Using [heat-set fittings][heatset] in assembled objects looks super professional.
- Printing on low-humidity days yields better results than on high-humidity days.
- Good modeling tools are expensive, but make the process very enjoyable.

I'm looking forward to another year of design and manufacture with my 3D printer!

[sovolsv02]: https://sovol3d.com/products/sovol-sv02-dual-extrusion-3d-printer
[bltouch]: https://sovol3d.com/products/sovol-bltouch-auto-bed-leveling-sensor-bltouch-smart-for-3d-printer
[octoprint]: https://octoprint.org/
[octobalena]: https://github.com/MatthewCroughan/octobalena
[heatset]: https://www.adafruit.com/product/4256

[multimeter]: {% post_url 2021-08-01-new-housing-for-radioshack-22-810-15-range-digital-multimeter %}
