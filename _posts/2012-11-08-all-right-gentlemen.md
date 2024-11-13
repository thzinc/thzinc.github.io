---
title: All Right Gentlemen!
tags: programming sql
published_at: https://blog.thzinc.com/post/78147973485/all-right-gentlemen
excerpt: |
  Don’t let this happen to you! Look at the details of how your indexes are being used. If you have plain ol’ “predicates” and not “seek predicates” on your index, you’re scanning your index, despite the seek!
---

!["All Right, Gentlemen!" meme format; the boss shouts, "All Right, Gentlemen! We need to continue to optimize our database performance. What have we tried?"; a paper shows "✅ Identify and eliminate table scans. ✅ Ensure queries are written to perform index seeks instead of scans."; a group of men look intently; it is implied that someone added the following to the bottom of the paper: "Make sure index seeks are not still doing scans"; the group of men look aghast.](/assets/All-Right-Gentlemen.png)

Don’t let this happen to you! Look at the details of how your indexes are being used. If you have plain ol’ “predicates” and not “seek predicates” on your index, you’re scanning your index, despite the seek!
