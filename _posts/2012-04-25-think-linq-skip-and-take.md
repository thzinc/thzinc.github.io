---
title: Think LINQ – .Skip() and .Take()
tags: dotnet csharp
category: Think LINQ
published_at: https://blog.thzinc.com/post/77215364739/think-linq-skip-and-take
---

Needing to page through a collection is nothing new, and LINQ handles this nicely with two different methods: `.Skip()` and [`.Take()`][docs-take]. The `.Skip()` method will skip over a specified number of items in an `IEnumerable<>`. The `.Take()` method will iterate over a specified number of items of an `IEnumerable<>` and then stop.

```csharp
List<string> ordinals = new List<string> {
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth"
};

// This will contain "third", "fourth", "fifth", "sixth", "seventh", and "eighth"
var thirdThroughEighth = ordinals.Skip(2).Take(6);
```

What’s interesting to note is that `.Skip()` does not call the [`.Current`][docs-ienumerator-current] property on the enumerator when it skips over items in an `IEnumerable<>`. If you are working with a `List<>`, this may not be a particularly interesting property of `.Skip()`. However, if you are using a custom enumerator that performs some extra work (object instantiation, etc.) when the `.Current` property is called, `.Skip()` will nicely never call `.Current`, and instead keep calling [`.MoveNext()`][docs-ienumerator-movenext] until the requested number of items has been skipped over.

[docs-take]: https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.take?view=net-6.0#System_Linq_Enumerable_Take__1_System_Collections_Generic_IEnumerable___0__System_Int32_
[docs-ienumerator-current]: https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1.current?view=net-6.0#System_Collections_Generic_IEnumerator_1_Current
[docs-ienumerator-movenext]: https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator.movenext?view=net-6.0#System_Collections_IEnumerator_MoveNext
