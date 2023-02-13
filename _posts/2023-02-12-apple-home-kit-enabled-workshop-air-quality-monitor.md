---
title: Apple HomeKit-enabled workshop air quality monitor
tags: programming electronics javascript
see_also:
  - title: thzinc/workshop-air-quality-monitor on GitHub
    url: https://github.com/thzinc/workshop-air-quality-monitor
---

After I built the [cardboard stock sorting shelf][shelf-post], I had about a week of breathing issues as a result of poor ventilation from the sawdust and particulate in the air in my garage. Resolved to avoid another week of feeling crummy, I bought a beefy fan and have eventual plans to build a CR box based on [The 3D Handyman's very well-researched plans][3dhandyman].

However, it's very hard to change what isn't measured, so I also put my [go-sensors] libraries to use on a Raspberry Pi and built an air quality monitor with Apple HomeKit support! I used the very excellent [hap-nodejs] library to integrate the [rpi-sensor-exporter] data for use with HomeKit. I already had a Raspberry Pi Zero W available, as well as several important sensors:

- [Plantower PMS5003][plantower] for measuring particulate matter at 2.5 and 10 microns
- [Sensiron SGP30][sensiron] for measuring total volatile organic compounds (useful in a garage)
- [Asair AHT20][asair] for measuring temperature and humidity

![View inside case with labelled diagram of components; Raspberry Pi Zero W on the left with a wire harness connected to the GPIO header; Plantower PMS5003 on the top right, with a Sensiron SGP30 and Asair AHT20 sensor below it](/assets/apple-home-kit-enabled-workshop-air-quality-monitor-case.png)

I happened to have a reasonable plastic case that I scavenged from a broken air filter, so I placed the components and drilled a few quick holes. I did have to remove a little bit of the side wall to allow the Plantower PMS5003 to freely pass air through the sensor, but otherwise it was a comfortable fit. I mounted it on my battery charging wall because I already have a hefty USB charger. And now I have air quality readings available through HomeKit! (And also Prometheus, because that's how [rpi-sensor-exporter] works.)

![Assembled case mounted on charging wall with a short USB cable plugged into a power strip; two battery chargers are visible on the left.](/assets/apple-home-kit-enabled-workshop-air-quality-monitor-mounted.jpg)

[shelf-post]: {% link _posts/2023-01-03-cardboard-stock-sorting-shelf-design-and-build.md %}
[3dhandyman]: https://the3dhandyman.com/workshop-air-filter-drawings/
[go-sensors]: https://github.com/go-sensors
[rpi-sensor-exporter]: https://github.com/go-sensors/rpi-sensor-exporter
[hap-nodejs]: https://github.com/homebridge/hap-nodejs
[plantower]: https://www.adafruit.com/product/3686
[sensiron]: https://www.adafruit.com/product/3709
[asair]: https://www.adafruit.com/product/4566
