---
title: Think LINQ – .Any() and .All()
tags: dotnet csharp programming
category: Think LINQ
published_at: https://blog.thzinc.com/post/77003850807/think-linq-any-and-all
excerpt_separator: <!--more-->
---

“I just want to know if there’s anything in this `List`.”

“Do any of the `string`s in my array start with ‘q’?”

“How can I be sure all of the `Rectangle`s in my `IEnumerable<>` have a width of 10?”

These are the types of questions `.Any()` and `.All()` can answer. <!--more--> Both `.Any()` and `.All()` return `bool`, which means that the expression they evaluate against each element must return `bool`. (Similar in usage to `.Where()`) In the case of determining if an `IEnumerable<>` is non empty, `.Any()` has a couple of advantages over using `.Count() > 0`. The `.Any()` method with no parameters checks to see if the `IEnumerable<>` is actually an `ICollection<>`, which has a predefined `.Count` property, and internally, it returns the result of `.Count > 0`. However, for `IEnumerable<>`s that are not `ICollection<>`s, it attempts to iterate over the first element from the `IEnumerator<>`. This is much faster than calling `.Count() > 0`, because `.Count()` will iterate through the whole `IEnumerable<>` in order to produce a total number of elements in the `IEnumerable<>`.

```csharp
IEnumerable<object> objects = new object[] { new object() };
if (objects.Any())
{
    Console.WriteLine("Thar be objects!");
}
else
{
    Console.WriteLine("Thar be no objects in ye IEnumerable<object>");
}
```

Similarly, `.Any()` can take in an anonymous method and evaluate that against each element in the `IEnumerable<>`. When the anonymous method evaluates `true` against one of the elements in the `IEnumerable<>`, the iterating stops and the result is returned.

```csharp
IEnumerable<string> strings = new string[] { "Johnny", "loves", "quilting" };
if (strings.Any(s => s.StartsWith("q")))
{
    Console.WriteLine("There's at least one word that starts with 'q'");
}
else
{
    Console.WriteLine("Life is dull because none of your words start with 'q'");
}
```

The method `.All()` evaluates an anonymous method over all of the elements in the `IEnumerable<>`. If any of them return `false`, the iterating stops and the result is returned.

```csharp
IEnumerable<Rectangle> rectangles = new Rectangle[] {
    new Rectangle(10, 20),
    new Rectangle(10, 30),
    new Rectangle(10, 40)
};
if (rectangles.All(r => r.Width == 10))
{
    Console.WriteLine("All rectangles have a uniform width of 10");
}
else
{
    Console.WriteLine("The world is in chaos because not all rectangles are the same width!");
}
```
