---
title: “But, IIS, I want to return useful content for my errors!”
tags: programming
published_at: https://blog.thzinc.com/post/77845841945/but-iis-i-want-to-return-useful-content-for-my
---

Sometimes I think of IIS as a big, dopey guy with a mostly-likable personality. He really wants to help with anything and everything, but he’s not very good at any of it.

_IIS: I see your handler is returning an HTTP status code 500._

**Me: Yep, that’s right, IIS. I’m going to output some useful XML content along with my 500 error.**

_I’ve got this awesome 500 error page. Here, let me just write this out for you._

**Wha-, no! IIS, I just told you I’m writing out my own content!**

_There, done and done!_

**Why are you like this, IIS?**

Fortunately, there is a strange little boolean property on `HttpResponse` that allows for developers to return their own content despite what IIS might be configured to do with errors by default: [`HttpResponse.TrySkipIisCustomErrors`][docs]. Just set this to true in your code where you have access to the context and IIS will leave the content alone and not try to replace it with IIS’s own “friendly” error pages.

[docs]: https://learn.microsoft.com/en-us/dotnet/api/system.web.httpresponse.tryskipiiscustomerrors?view=netframework-4.8.1&redirectedfrom=MSDN#System_Web_HttpResponse_TrySkipIisCustomErrors
