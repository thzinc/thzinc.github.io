---
title: Think LINQ – .Cast()
tags: dotnet csharp
category: Think LINQ
published_at: https://blog.thzinc.com/post/76570229763/think-linq-cast
---

Personally, I find that `.Cast()` is an often overlooked part of LINQ. Of course, `.Cast()` is handy when casting each element of an `IEnumerable<>` from one type to another. However, one detail in its method signature brings to light a much more interesting use: `.Cast()` extends `IEnumerable`, the non-generic interface, but returns `IEnumerable<>`. This is significant because it becomes a gateway for non-generic collections to take advantage of the whole LINQ library. Collections that may have been developed for .NET 2.0 get `.Where()`, `.Select()`, etc.

Consider the following example when working [`System.Web.Security.MembershipUserCollection`][docs-membershipusercollection], which was introduced in .NET 2.0:

```csharp
MembershipUserCollection muc = Membership.GetAllUsers();
IEnumerable<MembershipUser> lockedOutUsers = muc.Cast<MembershipUser>().Where(mu => mu.IsLockedOut);
```

Without LINQ, this would have had to have been written to iterate over each user in the `MembershipUserCollection`, then add to an temporary list of `MembershipUser`s. Instead, it’s a concise one-liner.

[docs-membershipusercollection]: https://docs.microsoft.com/en-us/dotnet/api/system.web.security.membershipusercollection?view=netframework-2.0
