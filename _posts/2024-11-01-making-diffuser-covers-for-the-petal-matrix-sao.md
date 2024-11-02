---
title: Making diffuser covers for the "Petal Matrix" SAO
tags: 3d_printing
see_also:
  - title: Diffuser cover for the Hackaday Superconference 2024 Petal Matrix SAO at Thingiverse
    url: https://www.thingiverse.com/thing:6816878
---

Ever since the [badge reveal][badge-reveal], I thought the the Petal Matrix SAO looked neat, and I wanted to be able to make something that I might be able to trade with other conference-goers. Since it's a cool illuminated thing, I thought maybe a diffuser cover might look cool!

I took the [PCB info from the repo][pcb-ps], trimmed it down in Inkscape to only the layers I needed, then imported it into Shapr3D. From there, I added a 0.2mm space for tolerating fit (because that's typical for my printer), some standoffs to hold the board ~5mm from the cover, and retention clips to keep the cover on the board.

![Rendering of cover showing inner standoffs and retention clips through a translucent material](/assets/petal-matrix-cover-rendering.jpg)

I decided to iterate a bit on the thickness of the top layer that was to be doing the diffusion. After five prints starting at a thickness of 1.0mm, I found that a single 0.3mm layer was both sufficient and allowed the best amount of light through.

![Photo of 5-up comparison; each cover is laying on top of an iPad showing a photo of colorful beads, the 5 covers have visible differences in their textures which diffuse the light differently; the last of the covers diffuses the light most evenly](/assets/petal-matrix-cover-five-up.jpg)

Once I settled on the 0.3mm thickness, I wanted to test out how sanding the cover would affect diffusion.

![Photo of 2-up; one cover is sanded and the other is not; the sanded cover has a milkier appearance, but does diffuse the light more](/assets/petal-matrix-cover-two-up.jpg)

I decided to sand half the batch and have them on me at the conference. I've handed out a few already. If you see me, feel free to say "Hi" and ask me for one! (Or grab it from [Thingiverse][thingiverse] and print your own.)

![Photo of cover attached to the Petal Matrix connected to the badge; another SAO is connected that says "thzinc"](/assets/petal-matrix-cover-final.jpg)

[badge-reveal]: https://hackaday.com/2024/10/22/the-2024-hackaday-supercon-sao-badge-reveal/
[pcb-ps]: https://github.com/Hack-a-Day/2024-Supercon-8-Add-On-Badge/blob/main/hardware/sao/petal_matrix/Petal_Matrix.ps
[thingiverse]: https://www.thingiverse.com/thing:6816878
