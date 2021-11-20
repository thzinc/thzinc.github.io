---
title: mRNA Vaccine Visualization (and cute frame for my vaccination record card)
tags: art 3d_printing javascript
see_also:
  - title: thzinc/vaccination-record-card-frame on GitHub
    url: https://github.com/thzinc/vaccination-record-card-frame
  - title: COVID-19 Vaccination Record Card Frame on Thingiverse
    url: "https://www.thingiverse.com/thing:4858980"
---

I grew up with my mom telling me stories about chicken pox, and then a few of my friends caught it. I avoided catching the pox and I was able to be vaccinated against it. Now I'm an adult with a significant protection against shingles! I think vaccines are fantastic and things of marvel and wonder. (Which is also why I love my [Sawbones "Pro-Vax" pin][enamel-pin].) Not long after the mRNA COVID-19 vaccines became available, a team of people sequenced the mRNA from both the Moderna and Pfizer vaccines and published the data. Looking at the sequenced data is fascinating: it's the code that instructs a molecular machine to make a protein.

I wanted something to be reminded of the awesome science of vaccines. The first viable mRNA vaccines felt like a momentus enough shift in public health that I wanted to make a physical record of it. (e.g. the [Voyager Golden Record][voyager] or [temperature knitting][temperature-knitting].) I decided to 3D print a small plaque that translated the amino acids (ACTG) into columns of different heights with a separations around the start and stop codons.

I wrote a small JavaScript program to build SVG files for each amino acid that I then imported into Autodesk Fusion 360 and extruded to the appropriate height. Fusion 360 definitely struggled with this task, but given enough time to run the CPU fans, it did produce geometry that I was able to export to STL and print with Cura.

![Screenshot of Fusion 360 rendering the mRNA visualization][screenshot]

The 3D print itself took quite a while because there was a lot of extruder movement. The printer also struggled a bit with some of the precision if you look closely enough, but overall the finished print turned out great and looks fantastic.

![Photo of 3D-printed mRNA visualization][plaque]

I also made a simple frame to hold my CDC "COVID-19 Vaccination Record Card" above the printed mRNA plaque. Now it sits on my desk and acts as a delightful visual reminder of the awesomeness of vaccines.

![Photo of 3D-printed frame holding a vaccination record card and an mRNA plaque][frame]

[enamel-pin]: https://store.dftba.com/products/pro-vax-enamel-pin
[voyager]: https://en.wikipedia.org/wiki/Voyager_Golden_Record
[temperature-knitting]: https://www.huffpost.com/archive/ca/entry/temperature-knitting-blankets-climate-change_ca_5e450c22c5b671eafe1ee092
[screenshot]: /assets/mrna-vaccination-record-card-frame-screenshot.png
[plaque]: /assets/mrna-vaccination-record-card-frame-plaque.png
[frame]: /assets/mrna-vaccination-record-card-frame.png
