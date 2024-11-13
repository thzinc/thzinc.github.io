---
title: Attack of the killer page
tags: programming dotnet
published_at: https://blog.thzinc.com/post/5660988323/attack-of-the-killer-page
---

I have spent the last few days tackling a truly gnarly mess of ASP.NET code that was brought to my attention because of its poor performance. The page is intended to be a working view of people involved in a project, allowing the user to interact with people in a dozen different ways. The page went through three developers over a couple of years before it got to me, and each of the devs before me had a particular business problem they were trying to solve, as is the case with most business software. However, what probably started as an innocent experimentation with ASP.NET update panels turned into a mess of spaghetti code.

The page I am working on was generating 8.7 MB of HTML, not including megs worth of images. Then, it applied an extremely liberal layer of CSS 3.0 features that Firefox couldn’t handle in large doses. (-moz-linear-gradient, I’m looking at you!) Then it fired off a couple dozen DOM-modifying jQuery statements. This page was taking over a minute to render a couple hundred records, and was sluggish to use. In short, this killer page was the spawn of my predecessors working under slim deadlines to eek out a couple of new features.

Part of the thing making the page unbearable was the use of ASP.NET update panels, list views, and what amounted to hundreds of ASP.NET controls. The viewstate on the page was over 1 MB alone! To correct this, I ripped out the ASP.NET controls and changed the page to use HTTP the way Tim Berners-Lee intended it. A good ol’ form submit with the search criteria is a perfectly sufficient method for passing data from the browser to the code.

The page is now hovering around 120 KB, loads in about 1.5 seconds, and is feeling quite a bit more nimble. By tomorrow, we’ll be out of beta and releasing on time.

This won’t be the last time I encounter a killer page.

Until next time,

- Daniel
