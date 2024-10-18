---
title: iCalendar link for Hackaday Superconference 2024
see_also:
  - title: iCalendar link for Hackaday Superconference 2024
    url: https://superconference.thzinc.dev
  - title: Glitch project page
    url: https://glitch.com/~hackaday-supercon-2024-ical
  - title: Hackaday Superconference 2024
    url: https://hackaday.io/superconference/
---

The [Hackaday Superconference 2024][supercon] schedule was released today and I've been very excited to see who all is speaking and what fun stuff I'll plan to attend. However, the schedule on the site was pretty hard to conceptualize and there wasn't a machine-readable format for calendar apps.

While poking at the site, I saw that the schedule was actually loaded from `https://hackaday.io/superconference/src/content.js`, and was _almost_ directly useable for parsing. I decided to use Glitch (and Fastly) to host a small Node site that requested the URL from `hackaday.io` and transformed it into iCalendar format with the [ical][ical] package.

[![Screenshot of superconference.thzinc.dev site with link to iCalendar schedule](/assets/supercon-2024-ical-site.png)][ical-site]

In order to be especially gentle to Hackaday's servers, I implemented a cached requester that keeps track of the last modified date reported by their server.

![A screenshot of November 2, 2024 showing the lineup of events at Hackaday Superconference 2024. The events are shown chronologically top to bottom, naturally highlighting the concurrency of several events.](/assets/supercon-2024-calendar.png)

Loading the schedule in Calendar is so much easier to see and reason about. I can't wait!

[supercon]: https://hackaday.io/superconference/
[ical]: https://www.npmjs.com/package/ical
[ical-site]: https://superconference.thzinc.dev
