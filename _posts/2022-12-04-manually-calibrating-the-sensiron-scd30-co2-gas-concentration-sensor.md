---
title: Manually calibrating the Sensiron SCD30 CO2 gas concentration sensor
tags: electronics programming
see_also:
  - title: go-sensors/rpi-sensironscd30-config on GitHub
    url: https://github.com/go-sensors/rpi-sensironscd30-config
---

I picked up an [Aranet4 Home][aranet4-home] CO2 sensor on a Black Friday sale and have finally had the chance to run a commercially-calibrated CO2 sensor against my [DIY CO2 monitor on the Flipper Zero][co2-monitor-on-flipper-zero] and found that my sensor needed some calibration.

Fortunately, [Adafruit] had an excellent write-up on the different methods recommended by Sensiron and how to go about it. Since I was also hacking on my [go-sensors] project, I decided to make a command line interface to manage both the "forced recalibration" procedure, as well as the sensor's "temperature offset" to correct for the sensor reading temperatures that are slightly warmer than ambient air.

I was able to add support for the calibration features into [go-sensors/sensironscd30] and then make use of them in the new CLI [go-sensors/rpi-sensironscd30-config] while the sensor and my Aranet4 sat side by side. It's really interesting to see how responsive the SCD30 is to detecting me–a CO2-making machine–being within a meter of the sensor.

[aranet4-home]: https://shop.aranet.com/north-america/product/aranet4-home
[adafruit]: https://learn.adafruit.com/adafruit-scd30/field-calibration
[go-sensors]: https://github.com/go-sensors
[go-sensors/sensironscd30]: https://github.com/go-sensors/sensironscd30
[go-sensors/rpi-sensironscd30-config]: https://github.com/go-sensors/rpi-sensironscd30-config

[co2-monitor-on-flipper-zero]: {% link _posts/2022-06-20-prototyping-a-real-CO2-monitor-on-the-flipper-zero.md %}
