---
title: .ToString() or not .ToString()
tags: programming csharp dotnet
published_at: https://blog.thzinc.com/post/77638531616/tostring-or-not-tostring
excerpt: |
  Every object in C# has it: `.ToString()`. That supposedly handy little method that “converts” the object into some string representation of the object. Sometimes it does just what you want, but sometimes it causes developers to go mad.
---

Are you kidding me?

!["Are you kidding me" meme face; a stick figure face glaring into the middle distance](/assets/AreYouKiddingMeBlackSS.png)

Every object in C# has it: `.ToString()`. That supposedly handy little method that “converts” the object into some string representation of the object. Sometimes it does just what you want, but sometimes it causes developers to go mad.

When `.ToString()` goes awry, our old pal `NullReferenceException` is there to be obliviously unhelpful. “Object reference not set to an instance of an object.” Oh really, NRE? Which object? _puh_

Ok, now that I’ve got that out of my system, let me take a minute to explain when to use `.ToString()`.

If you have an object that you know is a string, do not use `.ToString()`. Cast the object to a string instead.

```csharp
object mah_string = "bukkit!";

// Don't do this!
string label = mah_string.ToString();

// Do this instead
string label2 = (string)mah_string;
```

If you’re not totally sure it’s a string, but just want a null value if the object isn’t a string, use the as keyword.

```csharp
string label3 = mah_string as string;
```

If you’re working in ASP.NET and you are using the `<%= mah_string %>` syntax, you really don’t need to even cast the object as a string. The resultant `Response.Write()` will take care of any necessary casting for you. This means you can stop writing `<%= GetLocalResourceObject("MyLabel").ToString() %>` and simplify it to `<%= GetLocalResourceObject("MyLabel") %>`, and because `Response.Write()` can deal with nulls, you won’t ever have to deal with `NullReferenceException` in this scenario.

If you are intentionally converting some type, like `DateTime` or `int`, into a `string`, feel free to call `.ToString()`. That is what it’s there for.

If you call `.ToString()` on a `string`, find your nearest `.ToString()` Anonymous meeting.
