---
title: Interesting ASP.NET bug…
tags: programming dotnet
published_at: https://blog.thzinc.com/post/6569018501/interesting-aspnet-bug
---

Just came across a most peculiar issue in the ASP.NET 4.0 HttpContext. It seems that postbacks ceased to work when the HttpRequest.Form member was accessed (in a read operation) from within a module’s AuthenticateRequest event. Reading cookies, querystrings, and server variables all appear to function without issue, but accessing the Form member seemed to alter the request in such a way that the postback no longer worked.

The workaround was to eliminate the reading of the form variables in the module, but that is a bad workaround. Anyone with .NET Reflector able to shed some light on this?
