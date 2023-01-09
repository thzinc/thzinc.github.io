---
title: Think LINQ – The Wonder of IEnumerable<>
tags: dotnet csharp programming
category: Think LINQ
published_at: https://blog.thzinc.com/post/76466583186/think-linq-the-wonder-of-ienumerable
---

Language INtegrated Query, or LINQ, is a .NET feature that makes possible a powerful and extensible query on objects and collections thereof. LINQ is really a combination of a few key components: extension methods and generic collections. Understanding these two key components makes it much easier to “Think LINQ” when solving problems.

But first, a point of clarification: the LINQ-to-_X_ moniker is largely superficial. While there are some advanced things one can do with `IQueryable<>`, LINQ is primarily a set of extension methods on `IEnumerable<>`. Since `IEnumerable<>` is the core interface to all generic collections–`List`, `Set`, `Dictionary`, etc.–the extension methods all apply to each of these types of collections. Furthermore, if your implementation of collections implement `IEnumerable<>`, your implementations immediately gain LINQ functionality.

The `IEnumerable<>` interface is notoriously simple to implement, as it only requires two methods, and both of them are called `GetEnumerator()`. (`IEnumerable<>` inherits from the non-generic `IEnumerable`, and each of them define a `GetEnumerator()` method that return a generic type and a non-generic type, respectively.)

Below is an example of a very simple implementation of `IEnumerable<>` that shows what an enumerable of `Person` objects might look like.

```csharp
public class Person
{
	public string Name { get; set; }

	public DateTime BirthDate { get; set; }

	public DateTime? DeathDate { get; set; }
}

public class PersonEnumerable : IEnumerable<Person>
{
	public PersonEnumerable()
	{
		_backingEnumeration = new Person[] {
			new Person() { Name = "Daniel", BirthDate=DateTime.Parse("1970-01-01")},
			new Person() { Name = "James", BirthDate=DateTime.Parse("1980-01-01")}
		};
	}

	private IEnumerable<Person> _backingEnumeration;

	public IEnumerator<Person> GetEnumerator()
	{
		return _backingEnumeration.GetEnumerator();
	}

	System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
	{
		return GetEnumerator();
	}
}
```

Note that on construction of `PersonEnumerable`, the `_backingEnumeration` is populated with two `Person` objects. Ultimately, the enumerator comes from `_backingEnumeration`. Implementing an `IEnumerator<>` is a different level of complexity and not necessary for many tasks. (Feel free to peruse the [MSDN docs on `IEnumerator<>`][docs-ienumerator]. It’s good reading.)

Now that `PersonEnumerable` implements `IEnumerable<>`, all of the LINQ methods are available for use on it.

```csharp
PersonEnumerable pe = new PersonEnumerable();
Person daniel = pe.First(p => p.Name == "Daniel");
```

As noted prior, IEnumerable<> is only part of the equation that makes up LINQ. The other part is extension methods. Consider the basic implementation of the .Where() LINQ method:

```csharp
public static class IEnumerableExtensions
{
	public static IEnumerable<T> Where(this IEnumerable<T> coll, Func<T,bool> func)
	{
		foreach (T item in coll)
		{
			if (func(item))
			{
				yield return item;
			}
		}
	}
}
```

This short example of an extension method combines several awesome features: generics, anonymous delegates, and deferred execution. Essentially, the `.Where()` method extends `IEnumerable<>` and takes in an anonymous delegate. Any pointer to a method will do, whether it’s a lambda expression, an explicitly-defined delegate, or another method in a class. The anonymous delegate, parameter `func`, is used to evaluate each item in the `IEnumerable<>`. When `func` returns `true`, the item being iterated over is returned. This is where deferred execution is used. The `yield return` will not be executed until the resulting `IEnumerable<>`‘s `GetEnumerator()` method is called. Then, once the first item has been returned, the code will not continue execution until the enumerator calls `MoveNext()` again. This repeats until `.Where()`‘s loop exits, which signals to the enumerator that the enumeration is complete.

Many of the LINQ methods work in this manner, but not all. Methods like `.Count()`, `.All()`, or `.ToList()` will iterate through the whole enumerable to return their result. The [`System.Linq.Enumerable` documentation][docs-enumerable] provides a full listing and details of each of the LINQ methods. It’s very useful reading material.

Look for more [Think LINQ][series] posts coming up!

[docs-ienumerator]: https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1
[docs-enumerable]: https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable
[series]: /Think%20LINQ/
