---
title: Adjusting the Flyht Pro Stage Rack case for use with 10" mini racks
see_also:
  - title: "geerlingguy/mini-rack #99: Warning about Flyht Pro Stage Rack case and DeskPi Rackmate compatibility."
    url: https://github.com/geerlingguy/mini-rack/issues/99
---

I've been working on building a Raspberry Pi cluster and decided to jump into the "mini rack" world after seeing the trove of information that [Jeff Geerling][jeff] and his community have assembled at [Project MINI RACK][project-mini-rack]. I saw the [Flyht Pro Stage Rack][thomann] case and found it to be the ideal size for me. (I needed my rack to fit comfortably in an IKEA Kallax shelf.)

However, the Flyht Pro case adheres to a slightly different "half-rack" standard than the [_de facto_ 10" rack spec][10-in-rack]: it's 20mm wider. Fortunately, the case is well made and has easy-to-source metric parts. I was able to cheaply acquire four 20mm M5 standoffs and four 10mm M5 bolts to move one of the racks inward to fit the 10" rack spec.

![Photo showing one rail removed from the case with its own pair of M5 bolts and threaded washers; two pairs of 20mm M5 standoff and 10mm M5 bolt are laying next to the rail's own hardware](/assets/flyht-hardware.jpg)

I reused the case's threaded washer with my new bolts and remounted the rack. Now the rack is positioned to support my other 10" rack gear and I'm good to go!

![Photo of repositioned rack inside the case with a blank 10" panel and a four-tray Raspberry Pi panel mounted properly within the case](/assets/flyht-finished.jpg)

[jeff]: https://www.jeffgeerling.com/
[project-mini-rack]: https://mini-rack.jeffgeerling.com/
[thomann]: https://www.thomannmusic.com/flyht_pro_stage_rack_95_6u_double_door.htm
[10-in-rack]: https://mini-rack.jeffgeerling.com/#standard
