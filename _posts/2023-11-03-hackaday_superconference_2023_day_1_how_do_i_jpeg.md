---
title: Hackaday Superconference 2023 – Day 1 – How do I JPEG?
tags:
see_also:
  - title: "thzinc/Vectorscope – My fork of the badge's code"
    url: https://github.com/thzinc/Vectorscope
---

First day of [Hackaday Superconference 2023][supercon2023] down and I've had some time at home to tinker with the code on this year's badge. The badge itself has some nifty analog-ish oscilloscope-like features that I'm sure I'd understand and enjoy more if I knew more about electrical engineering. However, I do know plenty to futz around with the cool round TFT display and buttons!

![Photo of my badge displaying my avatar laying on top of my closed laptop; there is also a Flipper Zero running my CO2 monitor laying on the laptop](/assets/supercon2023/badge_at_event.jpg)

Since the [Vectorscope][upstream] repo hadn't been updated at the time I received my badge, I had to poke around in Thonny to see what the code on the Raspberry Pi Pico actually looked like. There was a handy demo showing off the round screen with a slideshow of pictures of planets, so I copied that and made a conference version of my avatar:

![Customized avatar showing my head in my respirator with green Hackaday and X logos](/assets/supercon2023/customized_avatar.jpg)

Somehow, I got lucky when I saved the file, because I was having a ton of issues trying to display any other JPEG image I created for the badge. Once I got home, the Vectorscope repo had been updated with the latest code matching the badge and followed the trail from Vectorscope to the [gc9a01_mpy] display library where a [helpful file][gc9a01_mpy-howto] shared the key:

```bash
#
# You can convert images to compatible jpg's by using ImageMagick's convert
# utility by specifying the output type as TrueColor. ImageMagick downloads
# are available from https://imagemagick.org/ for Linux, OSX, Windows and
# other operating systems.
#
# The wi-alien.svg icon is from https://github.com/erikflowers/weather-icons
# licensed under SIL OFL 1.1
#

convert wi-alien.svg -type TrueColor alien.jpg
```

From there, I made [a slightly cleaner copy][fork] of the "planets" demo, gave it a nice spot on the main menu, and included both my avatar and QR code. Now I'm ready for day two!

![Selfie of me holding my badge showing my customized avatar](/assets/supercon2023/selfie_with_badge.jpg)

[fork]: https://github.com/thzinc/Vectorscope/tree/personalization
[gc9a01_mpy-howto]: https://github.com/russhughes/gc9a01_mpy/blob/23084516b0a66d4970088527d914ded673d6e383/utils/howto-convert-to-jpg#L11-L12
[gc9a01_mpy]: https://github.com/russhughes/gc9a01_mpy
[supercon2023]: https://hackaday.io/superconference/
[upstream]: https://github.com/Hack-a-Day/Vectorscope
