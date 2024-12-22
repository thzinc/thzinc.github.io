---
title: "Playtesting regexed"
category: regexed game
tags: programming project_update
see_also:
  - url: https://regexed.com
    title: "regexed: a daily puzzle game"
  - url: https://github.com/thzinc/regexed
    title: thzinc/regexed on GitHub
---

Today has been a pleasant bit of flow time. I got the game engine worked out enough to actually make a full game cycle and did some refinement (and winnowing) of the puzzle concepts to get to a point where I feel comfortable enough putting it in others' hands for a test run.

Play [Puzzle hashtag-2 – #NeedleInTheHaystack][playtest-link]

> regexed 🗯️ #hashtag-2: 3/6<br>
> ✅❌⬛️⬛️⬛️<br>
> ✅✅✅✅❌<br>
> ✅✅✅✅✅

Since I'm anticipating this being a real, honest-to-god daily game, I'm trying to make the process of developing and editing puzzles easy to do. To that end, I've set up a folder with puzzles-in-development called `spoilers`. If you're looking at the GitHub repo and don't want to know what puzzles are coming, avoid the folder!

To guide the puzzle editorial process, I've written a list of "vibes" that I'm aiming for:

- Prioritize short solutions (1-5 mins on-page time)
- Periodically failing a puzzle is expected; tomorrow's another day to get it
- Should be very hard to get on first attempt
- Plain-language goal should be sufficient to accurately set requirements for pattern
  - It is permitted to rely on published and knowable specs (HTTP, URL, E.164, ISO, etc.)
- Cheeky, cheery, not edgy, not serious

I'm working on an initial catalog of puzzles now. I don't want to officially launch until the catalog is deep enough to weather a few busy weeks of life.

[playtest-link]: https://regexed.com/spoilers/hashtag-2?utm_source=thzinc&utm_medium=blog&utm_campaign=playtesting
