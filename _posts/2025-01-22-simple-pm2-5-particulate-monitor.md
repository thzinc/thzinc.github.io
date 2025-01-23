---
title: Simple PM2.5 particulate monitor
tags: air_quality electronics microcontrollers
see_also:
  - title: thzinc/simple-particulate-monitor on GitHub
    url: https://github.com/thzinc/simple-particulate-monitor
  - title: go-sensors/cubicpm1003 on GitHub
    url: https://github.com/go-sensors/cubicpm1003
---

As a part of my [prior experience dissembling "smart" air purifiers][prev-post], I have had a couple of [Cubic PM1003 indoor particulate sensor][cubicpm1003] modules sitting in my electronics stash. Since I had already tracked down the datasheet with the UART protocol and familiarized myself with it, I knew I could use something simple like an RP2040 to communicate with the sensor and blink some lights.

After a couple of larger Adafruit orders, I also had a couple of [KB2040][kb2040] microcontrollers in my stash, and those have a delightful Neopixel onboard that made it super simple to hook up and control the light. I designed and printed a case with a transparent cover to hold the sensor in the required upright position while exposing the USB-C port for powering the device.

![Photo of 3D printed tray with particulate sensor and microcontroller laying in it. The tray is about 85x70cm and the components fit snugly into cavities in the tray.](/assets/simple-particulate-monitor-tray.jpg)

I looked up the current [AirNow.gov Technical Assistance Document for the Reporting of Daily Air Quality – the Air Quality Index (AQI)][airnow] to refer to its guidelines for rating the levels of 2.5 micron particulate matter, as well as the familiar colors used to communicate air quality. The Neopixel onboard renders the colors quite well and I added a subtle "breathing" effect to alleviate the harshness of an inanimate object.

![Photo of assembled and powered-on device. The translucent cover disperses the light over a larger area.](/assets/simple-particulate-monitor-final.jpg)

Sadly, I had parts to make two of these units, but while desoldering a pin on one of the sensors, I lifted the trace from the PCB and broke it off. Since I'm not yet skilled in repairing traces, I've set the sensor aside in my "salvage" stash for later.

[prev-post]: {% post_url 2024-06-29-dumbing-down-the-levoit-lv-pur131-s-smart-air-purifier %}
[cubicpm1003]: https://github.com/go-sensors/cubicpm1003
[airnow]: https://document.airnow.gov/technical-assistance-document-for-the-reporting-of-daily-air-quailty.pdf
[kb2040]: https://www.adafruit.com/product/5302
