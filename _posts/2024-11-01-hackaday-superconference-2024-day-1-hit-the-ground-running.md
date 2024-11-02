---
title: Hackaday Superconference 2024 – Day 1 – Hit the ground running
see_also:
  - title: IoT Petal Matrix on Github
    url: https://github.com/thzinc/2024-supercon-iot-petal-matrix
  - title: Animated Petal Matrix on Github
    url: https://github.com/thzinc/2024-supercon-animated-petal-matrix
---

After a satisfying fit test of [my diffuser cover][prev-post], I got to work testing out the logic to light up the Petal Matrix SAO. My goal was to be able to drag my finger around the schematic image on my phone and cause the petal to light up with a short decay time. (The effect produces trails of light.)

After a little bit of time to accurately map the LEDs in the schematic image to the actual addresses used by the petal, I got exactly what I wanted!

<video alt="Video demonstration of internet-connected petal matrix; shows a hand touching the schematic image on an iPhone and the lights on the petal matrix light up accordingly; the lights trail off after 2 seconds" controls>
  <source src="/assets/supercon2024/iot-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

I've made the code–which includes both the code for the website and the badge–[available on GitHub][iot-repo].

Here's the map of the addressable LEDs on the Petal Matrix:

<img alt="Diagram of the placement logical mapping of LEDs on the Petal Matrix" src="/assets/supercon2024/petal-matrix.svg" style="width: 100%">

For example, to light up all seven of the LEDs in row 2:

```python
# Use the petal_bus initialization from the Hackaday repo
petal_bus.writeto_mem(PETAL_ADDRESS, 2, bytes([0b1111111]))
```

Or light up red, green, and blue in the center LED:

```python
# Use the petal_bus initialization from the Hackaday repo
petal_bus.writeto_mem(PETAL_ADDRESS, 2, bytes([0b10000000]))
petal_bus.writeto_mem(PETAL_ADDRESS, 3, bytes([0b10000000]))
petal_bus.writeto_mem(PETAL_ADDRESS, 4, bytes([0b10000000]))
```

Feeling satisfied with the internet-connectedness of the Petal Matrix, I decided I wanted something to play passively, so I set about mapping the LEDs to a 9 by 9 grid in order to map bitmaps to the display. It's a bit ridiculous, but I'm reasonably pleased with the result. (Despite its limitations!)

<video alt="Video demonstration of animation on the Petal Matrix, first showing the words 'Hello world' scrolling right to left, then a demo of a few wipe transition animations" controls>
  <source src="/assets/supercon2024/animation-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

I've also made this code [available on GitHub][animation-repo].

[prev-post]: {% post_url 2024-11-01-making-diffuser-covers-for-the-petal-matrix-sao %}
[iot-repo]: https://github.com/thzinc/2024-supercon-iot-petal-matrix
[animation-repo]: https://github.com/thzinc/2024-supercon-animated-petal-matrix
