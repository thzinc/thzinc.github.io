---
title: Prototyping a real CO2 monitor on the Flipper Zero
tags: electronics 3d_printing programming flipper_zero
see_also:
  - title: thzinc/flipperzero-firmware on GitHub
    url: https://github.com/thzinc/flipperzero-firmware/
  - title: CO2 Monitor on the standard firmware
    url: https://github.com/thzinc/flipperzero-firmware/pull/3
  - title: CO2 Monitor on the "Unleashed" firmware
    url: https://github.com/thzinc/flipperzero-firmware/pull/4
  - title: Flipper Zero ProtoBoard case 2 on Thingiverse
    url: https://www.thingiverse.com/thing:5415869
---

Previously in [Prototyping a volatile organic compound (VOC) and CO2 monitor on the Flipper Zero][earlier-post]:

> If the idea proved feasible, I’d buy a “proper” CO2 sensor like the [Sensiron SCD-30][adafruit-scd30].

![photo of Sensiron SCD30 sensor with a STEMMA QT / Qwiic cable connected](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-sensor.jpg)

The idea proved quite feasible, so I ordered the SCD30 and made quick work tweaking my VOC Monitor code to become a pure CO2 Monitor. Attaching it to the ProtoBoard was simpler because it's just a single sensor package that provides CO2, temperature, and humidity through a single I2C peripheral address.

![photo of the a CO2 sensor affixed to a Flipper ProtoBoard](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-bare.jpg)

The Sensiron SCD30 is a tiny bit taller than my previous sensors, so I had to tweak the case design to add some headroom. I also decided to close off the outer wall so the airflow only came in around the IO pins. I took the advice from [Sensiron's Design-in Guidelines][sensiron-design-guidelines] and minimized the expected draft of air flowing over the sensor.

![screenshot of section 3.3 of Sensiron's Design-in Guidelines](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-docs.png)

![rendering of updated case design](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-render.png)

![photo of assembled module reading 802 ppm connected to the Flipper Zero](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-indoors.jpg)

Using the module has been illuminating in my home office. I have suspected for a while that ventilation in my home is only mediocre (roughly 1000 ppm on average), and now I have some numbers to support it. Further, I have been able to demonstrate to myself the impact of opening a window and running the HVAC fan. Today, before I opened the window, the CO2 was sitting around 1150 ppm. I opened the window to the outside and turned on the HVAC fan and the CO2 dropped to around 800 ppm within just a few minutes.

I also took it for a ride into the forest to see what baseline CO2 levels might look like there.

![photo of module connected to Flipper Zero reading 476 ppm](/assets/prototyping-a-real-CO2-monitor-on-the-flipper-zero-outdoors.jpg)

[earlier-post]: {% post_url 2022-06-15-prototyping-a-volatile-organic-compound-voc-and-co2-monitor-on-the-flipper-zero %}
[adafruit-scd30]: https://www.adafruit.com/product/4867
[sensiron-design-guidelines]: https://sensirion.com/media/documents/84D49268/616536CB/Sensirion_CO2_Sensors_SCD30_Design-In_Guidelines_D1.pdf
