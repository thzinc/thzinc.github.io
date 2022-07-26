---
title: Think LINQ – .ToLookup()
tags: dotnet csharp programming
category: Think LINQ
published_at: https://blog.thzinc.com/post/76777278341/think-linq-tolookup
---

There is an class in the .NET generic collection framework that is often overlooked: `Lookup<>`. In effect, a `Lookup<>` functions like a `Dictionary<>` whose value is an `IEnumerable<>`. Though `Lookup<T,U>` is an implementation of `IEnumerable<IGrouping<T, U>>`, it functions with a similar efficiency to `Dictionary<T,IEnumerable<U>>`. Part of the LINQ extension methods include `.ToLookup()`, which works very similarly to [`.ToDictionary()`][earlier-post].

```csharp
public struct Widget {
	public string Name;
	public string Type;
}

/* snip */

public void WriteThings()
{
	IEnumerable<Widget> widgets = new Widget[] {
		new Widget { Name = "Thingamabob", Type = "Thing" },
		new Widget { Name = "Wogglefinger", Type = "Idea" },
		new Widget { Name = "Doohickey", Type = "Thing" },
		new Widget { Name = "Pizzoli", Type = "Idea" }
	};

	ILookup<string,Widget> widgetsByType = widgets.ToLookup(w => w.Type, w => w);

	foreach (Widget widget in widgetsByType["Thing"])
	{
		System.Diagnostics.Debug.WriteLine("Type: {0}, Name: {1}", widget.Type, widget.Name);
	}
}
```

The `WriteThings()` method outputs the following to the debug stream:

```
Type: Thing, Name: Thingamabob
Type: Thing, Name: Doohickey
```

[earlier-post]: {% post_url 2012-03-28-think-linq-todictionary %}
