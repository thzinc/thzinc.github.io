---
title: Illuminated "neon" tensegrity table desk toy
tags: 3d_printing art electronics
excerpt: |
  Last month, I added some of the 300mm NOODS LED strands to my Adafruit order because they were on sale and looked like they'd be fun to make something with. I was enamored with how flexible and bright and noodly they are and really wanted to make something that highlighted these properties.
---

![Collage showing a very crude drawing of a three-spoked tensegrity stand and a photo of the final assembled piece](/assets/tensegrity-table/header.jpg)

Last month, I added some of the [300mm NOODS LED strands][adafruit-noods-red] to my Adafruit order because they were on sale and looked like they'd be fun to make something with. I was enamored with how flexible and bright and _noodly_ they are and really wanted to make something that highlighted these properties. I've also been enamored with [tensegrity][wikipedia-tensegrity] designs that use flexible elements to suspect a load in a "floating" configuration. So I got to sketching!

## First design

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  src="https://collaborate.shapr3d.com/v/ay4X6Nbgp53921jJiyLiY" title="Interactive model viewer for first design" frameborder="0" allow="web-share; xr-spatial-tracking" loading="lazy" scrolling="no" referrerpolicy="origin-when-cross-origin" allowfullscreen></iframe>
</div>

After a little bit of tinkering with the NOODS, I decided that a horizontal three tension arm design around a central hub with a vertical hanger arm would work out reasonably well. Because the NOODS's electrical connections are on either end of the strand, the design needed to accommodate a large loop. The loop would consist of three strands of red for each of the tension arms and one strand of blue for the hanger arm. I planned to make some space inside the hub to contain electrical connections and excess length of the strands.

The excess length is important: a tensegrity design needs to be able to be adjusted into a balance of tension across each of the tension arms. If the strands on the tension arms are too loose, the top half won't balance and stay in place. It doesn't need excessive tension though, and is quite tolerant of flexing.

I laid out the geometry for the design, measured the anticipated lengths of NOODS that would support the design, and planned on some reasonable detail to ultimately hold the strands in place. However, I figured on printing the design as one piece, which meant that a lot of the detail ended up in suboptimal orientation for printing. I tried using supports, but ultimately had a couple of print failures in a row and decided to refactor the design into separate pieces.

## Second design

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://collaborate.shapr3d.com/v/PcDsHwxDe4cOG_FMVmfwg" title="Interactive model viewer for second design" frameborder="0" allow="web-share; xr-spatial-tracking" loading="lazy" scrolling="no" referrerpolicy="origin-when-cross-origin" allowfullscreen></iframe>
</div>

The first design was helpful to work out the plan for how to think about routing the strands through the piece. With that in mind–along with a good knowledge of my printer's fit tolerances–I took to redesigning each piece of the tensegrity design prioritizing printability. This is most noticeable in the different channels used for the strands on the hanger arm versus the tension arms.

![Cross section of the hanger arm showing a V-shaped channel compared to the tension arm's square U shaped channel](/assets/tensegrity-table/arm-cross-sections.png){:.invertable}

The hanger arm is designed to be printed "laying down," so it uses a V-shaped channel that can be printed layer by layer without supports. The tension arm is designed instead to be printed "top down" so that the square U-shaped channel is formed facing up.

One of the major benefits of this design is that each of the individual prints was very quick. Throughout the process, my printer ended up encountering an alignment problem that forced me to reprint a couple of pieces, but the process only affected a part of the project and the time to resolve the issue was relatively trivial.

## Assembly

![Loop of four NOODS strands connected in series to a 2.1mm DC barrel jack; the blue portion of the loop is connected near the barrel jack](/assets/tensegrity-table/noods-loop.jpg)

As a small aside, I was intending for the tension arms to be about 80mm long so that it would maximize the amount of visible NOODS. However, with all the parts printed I excitedly soldered the NOODS into a loop and forgot to add small lengths of wire between each strand to account for total loop length needed! I ended up with a loop of NOODS that was too short, so I reduced the length of the tension arms to about 40mm and all turned out well.

![Knolled parts laid out on my desk ready for assembly; two center rings, two hanger arms, six tension arms, two lids, a small round base and a large round base](/assets/tensegrity-table/knolled-parts.jpg)

The parts list is as follows:

- 4 300mm strands of NOODS (could be any colors)
  - 3 [red 300mm NOODS strands][adafruit-noods-red]
  - 1 [blue 300mm NOODS strand][adafruit-noods-blue]
- 1 60 Ohm resistor
  - Based on my crude understanding that I wanted each strand to receive ~3V @ 50mA. In series, that's 12V @ 200mA, and _R = V / I_, or _R = 12 / 0.200_
- Power connections (could be any means to provide 12VDC)
  - 1 2.1mm DC barrel jack
  - 1 12VDC power supply with 2.1mm barrel plug
- 2 6mm tall M6 threaded heat set inserts
- 2 12mm long M6 countersunk bolts
- 3D printed parts
  - 2 rings
  - 2 lids with through-hole for heat set insert
  - 2 hanger arms
  - 6 tension arms
  - 1 conical short base
  - 1 conical large base with slot for power cable

The ring is used to support each of the arms, and the lid and base are used to clamp the NOODS in place against the channels in the arms.

![Mid-assembly showing the loop being routed from the hanger arm into the center of the ring and out one of the tension arms](/assets/tensegrity-table/mid-assembly.jpg)

Adjusting the balance and tension was a bit tricky. I used clear tape to help keep the strands in place while tugging and tightening the lid and base. Once the lid and base were tightened, the tape was no longer necessary.

![Side view of assembled design with clear tape over the tension and hanger arms](/assets/tensegrity-table/post-assembly-with-tape.jpg)

When assembled, the design is able to support light loads and can be picked up and moved around without any problem. I left it just loose enough to gently wobble when I vibrate the desk or poke at it. It has a "firm jello" vibe to it.

<video alt="Video showing the placement of a tiny book on top of the table, then demonstrating picking up the structure and wiggling it around" controls>
  <source src="/assets/tensegrity-table/load-testing.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Conclusion

I absolutely love this thing! It feels like a mini neon sign that wiggles gently and makes me happy to look at as I'm sitting at my desk.

[adafruit-noods-red]: https://www.adafruit.com/product/5506
[adafruit-noods-blue]: https://www.adafruit.com/product/5508
[wikipedia-tensegrity]: https://en.wikipedia.org/wiki/Tensegrity
