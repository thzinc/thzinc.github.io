---
title: MQTT, Mono, and ARM
tags: dotnet programming
see_also:
  - title: thzinc-icebox/mqtt-demo-client on GitHub
    url: https://github.com/thzinc-icebox/mqtt-demo-client
---

I wrote a .NET program to test building and cross-compiling an application to run on a [Sierra Wireless AirLink RV50][airlink] gateway.

The AirLink gateways are small, rugged computers that have cell modems and GPS built in. They are often used in vehicles and other industrial equipment. At Syncromatics, we're using them to power LED signs at bus shelters to show bus arrival times. Sierra Wireless offers a Lua-based development framework. I rather dislike Lua, and I am excited about the cross-platform work that's been happening in .NET. I also wanted to work with the mobile device management portal, [AirVantage][airvantage]. So I needed to prove that I could build an app that is deployable through AirVantage.

I went through a whole bunch of loops trying to find a way to get an ARM-compatible version of the .NET runtime on the RV50. I started off trying to cross-compile a version of Mono using [`dockcross/linux-armv7`][dockcross]. But I realized after a while that building Mono for ARM wouldn't get me what I wanted: a binary for ARM that ran this demo app.

I found quick success in using a Raspberry Pi with the `mono-complete` package. I built the app and bundled it with [`mkbundle`][mkbundle]. Copying the bundled binary of this demo app to the RV50 worked! It confirmed my approach of bundling was the way to go. But I did not want a Pi to do my building. So I went back to searching for a way to cross-compile from an x86 processor to ARM.

I thought that since working on the ARM-based Pi was successful, I could find an ARM emulator to do the same for me. This led me to find [some comprehensive work][arm-containers] done by the folks at [Resin.io][resin.io]. They built a Docker container that ran an ARM emulator for compiling binaries for ARM. After tinkering with trying to get Mono to run in the emulator, I realized this is not the _right_ way to cross-compile.

From my research, I knew that cross-compiling was mostly a matter of using a set of the C compilers and linkers for the target processor. I began to wonder exactly what Mono's `mkbundle` was doing, so I poked around more. Turns out it's a .NET program that generates some C code that it then compiles. And it turns out that Mono has several cross-compiling target profiles, one of which was a Debian-on-ARM profile. Awesome!

I tried making several bundles from macOS and ran them on the Pi. But I ran into several issues with missing .NET core libraries. I remembered that there are .NET linkers that assist with gathering the requisite assemblies in one place for a .NET app, so I started searching for that. I found [an eleven year old blog post][jean-baptiste] that pointed me in the direction of enlightenment. In the post, Jean-Baptiste wrote about a linker he coded and contributed to Mono. It did the trick, and between `mkbundle` and `monolinker` (as it is now called), I was able to assemble the build script for this demo app.

[jean-baptiste]: http://evain.net/blog/articles/2006/08/22/linking-all-the-way-down/
[arm-containers]: https://resin.io/blog/building-arm-containers-on-any-x86-machine-even-dockerhub/
[resin.io]: https://resin.io
[airlink]: https://source.sierrawireless.com/devices/rv-series/rv50/
[airvantage]: https://www.sierrawireless.com/products-and-solutions/iot-connectivity/iot-cloud-platform/
[dockcross]: https://hub.docker.com/r/dockcross/linux-armv7
[mkbundle]: https://www.mono-project.com/docs/tools+libraries/tools/mkbundle/
