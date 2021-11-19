---
title: Think LINQ – .SelectMany()
tags: dotnet csharp
category: Think LINQ
published_at: https://blog.thzinc.com/post/76891692912/think-linq-selectmany
---

I recently came across a [beautiful example of `.SelectMany()`][so-answer] used to find all types that implement a particular interface in all currently loaded assemblies. With minor alterations, here is how I used it:

```csharp
IEnumerable<Type> types = AppDomain.CurrentDomain.GetAssemblies().SelectMany(a => a.GetTypes()).Where(t => typeof(MyInterface).IsAssignableFrom(t) && t.IsClass && !t.IsAbstract);
```

You might ask, “[What is `.SelectMany()`][docs-selectmany]?” In a phrase, it is a list-of-lists flattener. Specifically, it is a LINQ extension method that iterates over an `IEnumerable<TSource>` executing an anonymous method that returns an `IEnumerable<TElement>`. Each of the `IEnumerable<TElement>`s that result are combined into a single `IEnumerable<TElement>` that may be used.

In the example above, there is an `IEnumerable<Assembly>` returned from `AppDomain.CurrentDomain.GetAssemblies()`. Each `Assembly` has a `.GetTypes()` method that returns `IEnumerable<Type>`. Ultimately, I want just one `IEnumerable<Type>` to iterate through and perform my `.Where()` filtering. By using `.SelectMany()`, I can iterate over the assemblies and produce a combined list of types.

[so-answer]: https://stackoverflow.com/a/26750/1653492
[docs-selectmany]: https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.selectmany?view=net-6.0#System_Linq_Enumerable_SelectMany__2_System_Collections_Generic_IEnumerable___0__System_Func___0_System_Collections_Generic_IEnumerable___1___
