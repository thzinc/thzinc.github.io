---
title: USB-powered AA shim
tags: electronics 3d_printing
see_also:
  - title: USB AA battery shim on Thingiverse
    url: https://www.thingiverse.com/thing:6309864
---

I wanted to display my [Hackaday Superconference badge][badge-post] without continually burning through disposable batteries, or having to cycle through rechargeables every other day. A fellow conference-goer shared [this LiPo holder design][lipo-holder] which just fits into the badge's AA receptacles and provides a sturdy plane to which to strap a bigger battery. I liked the fact that this didn't further modify the badge and everything remained usable, but it was a little bulkier than I needed for a display piece.

After thinking on it a bit, I realized I'd rather use the lanyard holes in the badge to mount it as a display, but I still wanted to power it via USB–and not through the side-mounted Pico USB port. I had a [USB Micro-B Breakout Board][adafruit-usb] from Adafruit and a variable voltage buck circuit that were each mounted on convenient 10mm x 20mm PCBs that could easily fit within the bounds of a AA cylinder. The voltage buck could then be set to ~3 VDC to supply the same voltage as expected from two AA batteries. (And of course I'd need to bridge the contacts on the other receptacle.)

I designed a holder for the two boards that allowed a USB micro plug to attach in the middle of the "shim" design, and made room to attach stuff with heat set inserts. (Because I splurged on a set of M2 through M6 inserts 😅)

![Visualization of the AA shim design; a cylinder that has been bisected longways. there are discs remaining on the ends intended to help make contact to the AA battery receptacle and there is a protruding ledge to support the voltage buck board in an odd orientation](/assets/usb-aa-shim-design.png)

After a couple of false starts on the 3D printer, I ended up with a super clean print that fit the heat set inserts perfectly. This might be my favorite quick build to date!

![Photo of assembled shim next to a real AA battery for comparison](/assets/usb-aa-shim-comparison.jpg)

![Photo of assembled shim plugged into a USB micro cable](/assets/usb-aa-shim-plugged-in.jpg)

![Photo of shim inserted into my badge](/assets/usb-aa-shim-in-situ.jpg)

[lipo-holder]: https://www.printables.com/model/631370
[adafruit-usb]: https://www.adafruit.com/product/1833

[badge-post]: {% post_url 2023-11-05-hackaday-superconference-2023-day-3-simon %}
