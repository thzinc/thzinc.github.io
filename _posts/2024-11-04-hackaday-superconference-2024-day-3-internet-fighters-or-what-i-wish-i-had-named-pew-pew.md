---
title: Hackaday Superconference 2024 – Day 3 - "Internet Fighters," or what I wish I had named "Pew! Pew!"
tags: electronics microcontrollers programming speaking
see_also:
  - title: 2024-supercon-game at Github
    url: https://github.com/thzinc/2024-supercon-game
---

After writing up a [summary of day 2][prev-post], I got the itch to make a game on the badge. I had a few criteria I wanted to satisfy:

1. It has to be multiplayer
2. It has to use only what's commonly available to everyone (i.e., the badge itself and the SAOs)
3. It has to be at least a little bit twitchy

Since I had already done a bunch of work around the Petal Matrix, I knew that would be the basis of my game. I thought it would be fun to control a "ship" around the outer edge of the display and use the badge's buttons to send projectiles toward the center of the display. Other player's projectiles would fly out of the center toward the outer edge and the goal would be to dodge while trying to hit opponents.

![Crude sketch of concentric rings; a "spaceship" is on the outer ring facing toward the center and a "projectile" exists between the spaceship and the center](/assets/supercon2024/pew-pew-sketch.jpg)

I fought with the touchwheel. It was easy enough to obtain readings of the detected position of my thumb around its ring, but it would frequently jitter to seemingly-random values. I made sure to remove all the other SAOs to reasonably avoid other electrical interference, and I tried running solely on the badge's battery power, but neither could eliminate the jitter. This made trying to use the wheel to move around the edge of the display feel like nothing bt random chance and button mashing, which just wasn't fun.

Fortunately, the badge has three buttons in a horizontal plane that made for an easy "left," "fire," and "right" set of inputs. I trimmed down the game to only use the Petal Matrix and the badge's own buttons and the play experience became quite a bit more satisfying.

To make this multiplayer, I used MQTT to subscribe to a unique topic per instance of a game. A group of players could agree on a unique name for their game and configure their badges to use the shared game name. The game doesn't render any other players' positions, only projectiles, so playing with multiple people was a benefit that came for free with this model.

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/uzbnvA3hTbI?si=BJ3aFvyUYlJ4uDZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

At some point, I looked up from my code and saw it was 1:00 AM and had to force myself to go to sleep so I could actually bring this to Supercon. After getting to meet up with a new friend, work out some WiFi issues, and try out the game, I was excited to share it during the [badge hacking demos][demos] at the culmination of the conference.

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/Iz-HrZkzUlk?si=vZrwtDl-5Rl96fzx&amp;start=2304" title="Hackaday Superconference 2024: Badge Hacking Ceremony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

[prev-post]: {% post_url 2024-11-02-hackaday-superconference-2024-day-2-mostly-talking %}
[demos]: https://www.youtube.com/watch?v=Iz-HrZkzUlk
