---
title: Hackaday Superconference 2023 – Day 3 – Simon!
tags: programming electronics microcontrollers
see_also:
  - title: "thzinc/Vectorscope – My fork of the badge's code"
    url: https://github.com/thzinc/Vectorscope
---

In the final day of [Hackaday Superconference 2023][supercon2023], I feel like I started to get into the groove of the conference. During the afternoon, I found a spot to play around more with my badge while within earshot of a couple of sessions that–frankly–were beyond my level of understanding in electronics. However, spending time with the badge and its hardware made me want to play with it, so I decided to try my hand at making a simple game. I learned how to draw rectangles on the screen and decided to make a [Simon][simon-game] game where the game takes turns with you reciting a series of colors/button presses.

After tinkering with some basic programming, I smashed some code together to maintain game state in a couple of arrays. I fought with the async-but-not-really timers for "illuminating" the lights of the different quadrants and finally got something that was playable!

<video alt="Video of me demonstrating the Simon game using the A, B, C, and D buttons on the badge, then exiting the game to show the Leekspin animation, then exiting to show my ID demo with QR code and avatar " controls>
  <source src="/assets/supercon2023/simon-on-badge.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The evening got really good with a truly delightful session by [Gella][gellacraft]. She shared the how and why of developing companion bots while allowing the audience to pass around her dragon, Nova, along with a magic wand that had the ability to sense a color from a surface and transmit that color to lights on the dragon. It was a super fun interactive session!

The cap for the night was the badge hacking award ceremony. Going into it, I wasn't sure how it would work or if I would even try to share anything. Fortunately, it was cheerful and fluid: a call for people who did badge hacks in a particular category went out and anyone could jump in and present their work to the crowd. Among them were some gems, some funny mishaps, and a lot of joy. I did present Simon and while I didn't win, I did have a great time.

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/11Js0cOif4c?start=2740" title="Hackaday Superconference 2023: Badge Hacking Ceremony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

My [fork of Vectorscope][fork] is available with Simon, along with the other stuff.

[fork]: https://github.com/thzinc/Vectorscope/tree/personalization
[gellacraft]: https://www.gellacraft.com/
[simon-game]: https://en.wikipedia.org/wiki/Simon_(game)
[supercon2023]: https://hackaday.io/superconference/
