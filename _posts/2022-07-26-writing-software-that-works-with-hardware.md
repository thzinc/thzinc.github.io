---
title: Writing software that works with hardware
tags: electronics programming sdlc
see_also:
  - title: go-sensors on GitHub
    url: https://github.com/go-sensors
---

I've been working on a lot of hardware projects lately: [making text-to-speech appliances work on transit vehicles][post-textpseak], [making software for internet-connected signs][post-mqtt-mono-and-arm], [prototyping tools to help me make good health decisions][post-co2-monitor], and building out my [go-sensors][go-sensors] libraries to support physical environment sensors. I've spent a lot of my time as a programmer working solely in software, but I've been increasingly enjoying working in that semisolid place between hardware and software.

Working with hardware is different from working with software alone in a few ways I find interesting.

## Most hardware that is designed for integrating in a variety of projects has a well-reasoned API

Since hardware is usually more cumbersome than software to change, more work goes into anticipating use cases and solving problems before the hardware gets into your hands. This is especially true the closer you get to the integrated chip manufacturer. There is a dearth of datasheets that include every necessary data point to help you stick a chip on a board and then send it the right electrical signals to make it do its thing. Obviously, some datasheets are better than others, but I've had a pretty good time of reading through docs from Asair, Plantower, and Sensiron.

## Hardware APIs are remarkably unchanging

This might be obvious to some, but it's possible to write code that integrates with a piece of hardware that continues to work for years without worrying about some unexpected software update making it inoperable. The code I've written over the years is much more likely to change in a way that causes hardware to stop working than the hardware itself doing that.

## Hardware APIs (and their protocols) are usually very terse and not self-explanatory

[I²C][wikipedia-i2c] is pretty neat protocol (that used archaic and exclusionary terminology until 2021) that enables a controller to connect to many peripherals on a two-wire connection. It's a protocol that most computer systems are using in some way to communicate with sensors on your device's power supply, change your keyboard backlights, measure temperature, or an innumerable quantity of other things.

And it's terse.

When a vendor uses this protocol in its API, there is (almost) no getting anywhere without the vendor documentation. Without knowing specific byte sequences to write to and read from the chip, there's not much to do. It's the extreme opposite of much "higher-level" APIs that use XML where the data itself includes semantics about the data.

## Writing maintainable software that integrates with hardware

I've found a few things that help make maintaining the software that integrates with hardware a little less painful. Some of these work regardless of whether you're integrating with a software-only API or with a hardware API.

### Make sure the expected sequence of operations is documented somewhere

This might be laid out in the vendor documentation, a GitHub wiki, or a Stack Overflow post. Wherever it is, make sure it exists. If it doesn't exist, write it.

And while you're at it, commit a copy of the vendor documentation to your code repository, even if it's "available online." The vendor docs have a way of becoming impossible to find at the precise moment you need to refer to them.

### Keep clear lines between vendor concepts and your app's concepts

Organize your code so that it's clear where your software's terminology and concepts translate to the vendor's terminology and concepts. Inevitably, you'll get to a point in your software where you want to add support through another API. You might get lucky and the new API will use the same terminology as the existing one. But that's not usually how it goes.

### Write your code using the vendor terminology as closely as reasonably possible

With any well-reasoned API, I've found it very helpful to take the time to think like the author of the API intended. Think about the problem you're solving in those terms, use their nouns and verbs to describe the parts. Write your software such that you could glance between your code and the vendor docs and see a direct connection between the two. (Example of [a data structure directly defined by the vendor description for the Plantower PMS5003 particulate matter sensor][plantowerpms5003-data-structure])

Then, translate those concepts into your software. Your software will do things that the vendor didn't plan for and probably never intended to solve. You're using the API to accomplish a unique task, so demonstrate how it plays its part in your software's story.

### Make it Testable: Hardware Edition

I've found it helps an incredible amount to separate the implementations of protocols away from the mechanisms for communicating. This allows for unit testing that exercises the parts of your code that send and receive messages and helps validate that you got your checksums right. (Example of [unit tests against the Asair AHT10/AHT20 temperature and humidity sensors][asairaht10-unit-tests])

## Summary

Writing software to work with hardware is super fun, but when you realize that Past You took the time and care to make a maintainable integration, Present You will feel especially good. Be the Past You that Future You will appreciate.

[go-sensors]: https://github.com/go-sensors
[wikipedia-i2c]: https://en.wikipedia.org/wiki/I%C2%B2C
[go-sensors/plantowerpms5003]: https://github.com/go-sensors/plantowerpms5003
[asairaht10-unit-tests]: https://github.com/go-sensors/asairaht10/blob/main/sensor_test.go
[plantowerpms5003-data-structure]: https://github.com/go-sensors/plantowerpms5003/blob/main/sensor.go#L102-L133

[post-textpseak]: {% post_url 2022-07-25-a-story-about-protocols-and-documentation %}
[post-mqtt-mono-and-arm]: {% post_url 2017-06-17-mqtt-mono-and-arm %}
[post-co2-monitor]: {% post_url 2022-06-20-prototyping-a-real-CO2-monitor-on-the-flipper-zero %}
