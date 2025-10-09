---
title: Nerd sniping myself with regular expressions
category: regexed game
tags: programming project_update games
see_also:
  - url: https://regexed.com
    title: "regexed: a daily puzzle game"
---

As I'm working through the initial tranche of puzzles for [regexed 🗯️][regexed], I'm finding myself diving specs in order to validate my own work. It's a trove of "Today I Learned" content.

For example, while working on one of the URL parsing puzzles, I learned that it's explicitly permitted to specify empty strings for username and password in a URL, as in `https://user:@example.com` and in `https://:pass@example.com`, and also `https://@example.com` and `https://:@example.com`!

Relatedly, for HTTP URLs, the username and password are base64 encoded, prepended with `Basic ` and sent in the request as an `Authorization` header. While I had assumed that was probably the case, it was nice to validate that behavior with both the spec and cURL in front of me.

[regexed]: https://regexed.com
