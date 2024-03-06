---
title: Using Beyond Compare to make sense of 120+ page Evidences of Coverage
---

With my [Evidences of Coverage][eoc-rant] in hand, I now have the daunting task of comparing four 120+ page documents full of dense insurance language. Fortunately, my favorite diff tool, [Beyond Compare][bc], can handle text extraction from PDFs. Since these Evidences of Coverage are all very similar except for a series of different percentages and dollar amounts, the diff is extremely helpful for pointing out where the plans differ!

![Screenshot of Beyond Compare showing differences between two Evidences of Coverage](/assets/beyond-compare-screenshot-with-eocs.png)

The "line difference indicator" on the left edge shows exactly how far down in the document the actual changes are, and the text extraction is sufficient to read and compare the different rates of coverage.

Cheers to [Scooter Software][bc] for making one of my favorite dev tools 🍻

[bc]: https://www.scootersoftware.com/

[eoc-rant]: {% post_url 2024-03-02-rant-about-evidences-of-coverage-and-us-health-insurance %}
