---
title: Hackaday Superconference 2023 – Day 2 – Leekspin
tags: programming electronics
see_also:
  - title: "thzinc/Vectorscope – My fork of the badge's code"
    url: https://github.com/thzinc/Vectorscope
---

Second day of [Hackaday Superconference 2023][supercon2023] was a bunch of fun. I had the delightful surprise of unknowingly chatting with Benedetta Lia Mandelli and Emilio Sordi the day before only to see them on stage presenting the [Soft Actuator Orthosis][soft-actuator-orthosis] talk. They seem like neat humans working on ways to help folks with spinal cord injuries.

Today's goal was to get [Leekspin] on my badge. At first, I tried to use the [gc9a01_mpy] `bitmap` feature to run a series of sprites, but making it full-frame just requires too much memory. In the end, I resorted to showing a series of JPEGs as fast as can be rendered, which is Good Enough™.

<video alt="Video the badge showing a choppy animation of the 'Leekspin' meme: an anime girl twirling a leek while smiling" controls>
  <source src="/assets/supercon2023/leekspin-on-badge.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

My [fork of Vectorscope][fork] has been updated with the new animation.

[fork]: https://github.com/thzinc/Vectorscope/tree/personalization
[gc9a01_mpy]: https://github.com/russhughes/gc9a01_mpy
[leekspin]: https://leekspin.com/
[soft-actuator-orthosis]: https://hackaday.io/project/191850-soft-actuator-orthosis/details
[supercon2023]: https://hackaday.io/superconference/
[upstream]: https://github.com/Hack-a-Day/Vectorscope
