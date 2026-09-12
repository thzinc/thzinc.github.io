---
title: A laser printer and a 3D printer share a sheet of transparency to make business cards
tags: 3d_printing
section: make
---

Last year, [I made several attempts to 3D print a business card][prev-post] that failed to print cleanly and repeatably. I was trying to push a 0.2mm nozzle to its limit, and my printer was just struggling to print with sufficient resolution while also making material changes cleanly.

In the meantime, I acquired a (color) laser printer. I had been aware of—and in awe of—[Coverton's toner transfer method][coverton-thingiverse] (via [Hackaday][coverton-hackaday]) and wanted to revisit my business card idea.

After a test print that transferred a graphic really well, I had a spate of failures until I worked out a few tweaks. Ultimately, I ended up with a repeatable process that I will use for my cards–and more to come!

## The failures

I printed the following 3x3 contact sheet to a transparency sheet, mirrored so the printed surface read backwards but transfers corrected to the bottom of the print.

![Three rows of three cards with the "find me" design: a diagram of daniel@thzinc.com with "me", "me, online", "website", and "email" labels; the middle row is inversed from the other two rows](/assets/3d-printed-business-cards-take-2/monotone-sheet.png)

I made several prints to test the toner transfer with my typical extruder and bed temperature, and I removed the finished prints from the transparency while the print was still warm.

![a print of the inversed design with diagonal stripes visible](/assets/3d-printed-business-cards-take-2/card-01.jpg)
![a print of the inversed design with concentric rectangles and large patches of white where toner did not transfer](/assets/3d-printed-business-cards-take-2/card-02.jpg)
![a print of the regular design with large patches of white where toner did not transfer](/assets/3d-printed-business-cards-take-2/card-03.jpg)
![a print of the regular design with circular stripes visible](/assets/3d-printed-business-cards-take-2/card-04.jpg)

Upon reviewing the failed prints, I compared my successful test print to the failures and hypothesized that the color toner used in the test print was a factor in the transfer. So I printed a transparency with a gradient instead of black background.

![Three rows of three cards with the "find me" design: a diagram of daniel@thzinc.com with "me", "me, online", "website", and "email" labels; the middle row is a rainbow gradient instead of black background](/assets/3d-printed-business-cards-take-2/rainbow-sheet.png)

![a print of the inversed design with a blue-to-red gradient with some white patches where toner did not transfer and some circular white stripes visible](/assets/3d-printed-business-cards-take-2/card-05.jpg)

This was much more promising, and I wanted to try some tweaks:

- Increase extruder temperature to the upper limit for my PLA (230°C) for the first layer
- Increase bed temperature from 60°C to 75°C for the first layer
- Increase the flow of extruded plastic by 40%
- Allow the print to cool before removing it from the transparency

## The almost-successes

The tweaks resulted in much more passable prints, with only minor defects related to a few stretches of lines did not extrude _quite_ enough material.

![a print of the inversed design with a red to green gradient with only a few white streaks visible](/assets/3d-printed-business-cards-take-2/card-06.jpg)
![a print of the inversed design with a green to blue gradient with only a few white streaks visible](/assets/3d-printed-business-cards-take-2/card-07.jpg)

## The successes

Given that the few defects on the inversed design were minimal, I decided to apply the technique to the simpler black text on white background design and several cards that I am very pleased with!

![a print of the regular design with minimal defects](/assets/3d-printed-business-cards-take-2/card-08.jpg)
![another print of the regular design with minimal defects](/assets/3d-printed-business-cards-take-2/card-09.jpg)
![yet another print of the regular design with minimal defects](/assets/3d-printed-business-cards-take-2/card-10.jpg)

## Non-issues

I had seen several others online report difficulty with aligning the transparency to their 3D prints, but I was able to mitigate this quite sufficiently with a few specific steps:

- Used a rigid glass build plate
- Marked registration lines on build plate
  - I laid a strip of masking tape along the Y axis of the build plate, then moved the extruder into positions at `X5 Y5` and `X5 Y240` to draw a straight line with a pen and ruler
- Printed the transparency with a border that I could align to the registration marks on the build plate
- Laid the transparency on the build plate with a mixture of Elmer's glue stick and water
  - I carefully pressed out the bubbles with a wad of dry paper towel, trying to avoid messing up the design on the transparency
- Taped down the edges of the transparency

## Summary

I'm looking forward to eventually handing a few of these out. I'm also plotting out some ideas for an SAO for the upcoming Hackaday Superconference. Looking forward to apply this technique elsewhere!

[prev-post]: {% post_url 2025-10-06-close-but-not-quite-an-attempt-at-3-d-printed-business-cards %}
[coverton-thingiverse]: https://www.thingiverse.com/thing:4781088
[coverton-hackaday]: https://hackaday.com/2022/09/27/add-full-color-images-to-your-3d-prints-with-toner-transfer/
