---
title: A story about protocols and documentation
tags: electronics csharp programming
---

In April 2021, I had a problem at work: I didn't understand how our on-vehicle application communicated with the text-to-speech appliance to make [next stop announcements][gmv-next-stop-announcements].

I mean, I understood the code that opened the TCP port to the [TextSpeak][textspeak] text-to-speech appliance and sent a series of ASCII characters and escape sequences. I could read the code that assembled the sequences of commands and reason about how the appliance would respond both over TCP as well as the audio announcements that blared from my haphazardly-connected headphones. But I couldn't _see_ how the PDF from the vendor translated into code that translated into audio announcements. So many "magic numbers" and so few explanations.

---

We'd maintained an integration with this appliance for years, and it mostly just worked. The developer who wrote the code had long since moved on to another job and it was left to a newer generation of devs to carry on maintaining this code. I'm certain the original author had some vendor documentation in order to write this code, but the docs were not easy to find. I searched through a "junk drawer" of aging PDFs collected on a file share and found several vendor docs for different versions of the appliance we had considered during the initial integration work.

Once I figured out the specific model of TextSpeak our company settled on, I committed the PDF to the code repo and got to reading. As expected, the vendor documentation explained the escape sequences, logical order of operations, and how to configure every feature of the appliance. Our code only required a subset of the available features, and with the documentation in-hand, I started refactoring code.

My goal was to make it possible to look at the vendor documentation, look at the code, and immediately understand how the former led to the latter. In our C# codebase, I created a class of static methods that very simply return the byte sequences for each command described by the vendor docs. I even copied the definitions of the commands directly from the docs (with attribution) into the method documentation comments. I kept a very clean line between these vendor-specific commands and anything that our code performed with them.

Any part of our code that was using a character or byte sequence was changed to use a variable that was named sensibly for its purpose. This had the effect of making much more readable code for those not intimately familiar with the vendor's protocol. The easier readability also helped me troubleshoot the connectivity problem that ultimately led me into this tangled web of third-party integration code.

In the end, I worked through the connectivity issue, resolved the issue of needing code that's readable and maintainable by a team of developers, and learned a ton about the actual ASCII protocol for managing message flow.

[gmv-next-stop-announcements]: https://gmvsyncromatics.com/next-stop-announcements
[textspeak]: https://www.textspeak.com/product/mobile-text-to-speech/
