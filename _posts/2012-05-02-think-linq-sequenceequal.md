---
title: Think LINQ – .SequenceEqual()
tags: dotnet csharp programming
category: Think LINQ
published_at: https://blog.thzinc.com/post/77317749419/think-linq-sequenceequal
---

Up until March 26, I had come up with a number of crazy concoctions to test whether one `IEnumerable<>` was equal to another. Some of them chained together [`.Intersect()`][docs-intersect] with `.Count()`, comparing the count of the elements in the intersected set with the count of the elements in each of the two sets. (If the count of A∩B is equal to the count of A and the count of B, then A and B are equal.)

That method was mostly rubbish.

What I have since learned is that there is a relatively efficient LINQ operator called [`.SequenceEqual()`][docs-sequenceequal] that compares two ordered `IEnumerable<>`s. If each of the `IEnumerable<>`s contain equal elements in the same order, the `IEnumerable<>`s are equal. Simple. Straightforward. Useful.

```csharp
IEnumerable<string> stringsTheFirst = new string[] { "one", "two", "three" };
IEnumerable<string> stringsTheSecond = new string[] { "one", "two", "three" };
bool stringsAreEqual = stringsTheFirst.SequenceEqual(stringsTheSecond);
```

And if your `IEnumerable<>`s are not already ordered for you, the pattern then becomes:

```csharp
IEnumerable<string> stringsTheFirst = new string[] { "two", "one", "three" };
IEnumerable<string> stringsTheSecond = new string[] { "one", "two", "three" };
bool stringsAreEqual = stringsTheFirst.OrderBy(s => s).SequenceEqual(stringsTheSecond.OrderBy(s => s));
```

[docs-intersect]: https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.intersect?view=net-6.0#overloads
[docs-sequenceequal]: https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.sequenceequal?view=net-6.0#System_Linq_Enumerable_SequenceEqual__1_System_Collections_Generic_IEnumerable___0__System_Collections_Generic_IEnumerable___0__
