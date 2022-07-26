---
title: Think LINQ – .ToDictionary()
tags: dotnet csharp programming
category: Think LINQ
published_at: https://blog.thzinc.com/post/76671895905/think-linq-todictionary
---

There are a number of reasons to use `Dictionary<>` objects. Aside from the obvious name-value pair uses, `Dictionary<>` can also be used to essentially “index” an `IEnumerable<>` of objects. In testing with my colleague, Ryan Davis, we found that for `IEnumerable<>` collections that we intended to search through on a common field multiple times, converting the `IEnumerable<>` to a `Dictionary<>` provided a new gain in performance in most cases. Here’s an example of how this might be used, recalling the [`PersonEnumerable` from an earlier post][earlier-post]:

```csharp
PersonEnumerable pe = new PersonEnumerable();
Dictionary<string, Person> dict = pe.ToDictionary(p => p.Name, p => p);
Person daniel = dict["Daniel"];
```

[earlier-post]: {% post_url 2012-03-14-think-linq-the-wonder-of-ienumerable %}
