---
title: I tried to make a watering device for my cat
tags: electronics javascript
see_also:
  - title: thzinc/cat-waterer on GitHub
    url: https://github.com/thzinc/cat-waterer
---

My cat has an addiction to drinking directly from the tub's faucet. We've tried to get him nice water dishes and electric pump water fountains, but he just craves that good, good tub water. (And is extremely vocal about when he wants to drink.)

![Selfie with my cat drinking from the tub faucet in the background](/assets/i-tried-to-make-a-watering-device-for-my-cat-selfie.jpg)

I got the bright idea that I could make a "smart" watering device that I could activate from my phone (and eventually maybe with some kind of proximity sensor) to turn a pump on and give my cat a stream of water to drink from. I had a Raspberry Pi Zero W laying around and bought a peristaltic pump (and a few bits of other circuitry) and laid out a device in a small cardboard box.

![Cardboard box with a Raspberry Pi Zero W and a small pump motor mounted inside](/assets/i-tried-to-make-a-watering-device-for-my-cat-box.jpg)

Since my cat was most vocal about his water cravings in the middle of the night, I also added some animated RGB lighting to glow and pulse gently while the pump ran. This was probably mostly for my own sake, since it just makes the dark bathroom look cool, but I figured my cat would be able to associate the light with water running.

I mounted a silicone rubber hose to the tub faucet since that was where he expected "tub water" to come from. After several days of training, I did get him to finally drink from the hose.

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/ts7PHdwjLKQ" title="Rufus drinking from the cat waterer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The training didn't last. Despite being able to remotely trigger the watering device when I heard his yowls in the night, he was unsatisfied because he also wanted snuggles. At this point, we just have several water dishes and a store-bought water fountain to try to encourage him to drink whenever possible. I had fun trying to solve a problem with electronics and software, but this one didn't really stick.
