---
title: This is madness! This is CONVERT_IMPLICIT!
tags: programming sql
published_at: https://blog.thzinc.com/post/77947342749/this-is-madness-this-is-convertimplicit
---

I, like a few others I know around here, enjoy getting the semantics of things right. Even if two things are functionally equivalent, correctly identifying each of the things makes me feel warm and fuzzy. Take for example, SQL Server User Defined Types. No, not the SQL Server 2005 CLR-based User Defined Types. Just the plain ol’ SQL Server 2000-style User-Defined Types. The ones that are just a friendly alias over a system type. Here’s an example of what I’m talking about:

```sql
-- Define that all usernames should be a variable, 64-character string
CREATE TYPE username FROM VARCHAR(64) NOT NULL
```

In this example, I defined a type called username. Under the covers, it’s just a simple `varchar(64)`, but anywhere I want to store a username, I can use the alias username instead. It’s functionally equivalent, but semantically more descriptive.

Let’s use it in a table:

```sql
-- Define a table that uses the new [username] type
CREATE TABLE Users (
	UserId INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Username username
)

-- Create an index on Username
CREATE INDEX idx_Username ON Users (Username) INCLUDE (UserId)

-- Insert some sample users
INSERT Users (Username) VALUES
	('Administrator'),
	('Jim'),
	('Sandy'),
	('Bob'),
	('Miguel')
```

Now, the username type functions just like a `varchar(64)`, as seen in the `INSERT` statement. I didn’t have to do anything special to convert a normal `varchar` string to username before inserting it into the table.

Now, I can query it just as easily, even using a differently sized `varchar` to pass into the query:

```sql
-- Execute the query as a developer might through SQL Server Management Studio
DECLARE @Username VARCHAR(13) = 'Administrator'

SELECT UserId
FROM Users
WHERE Username = @Username
```

This works just as expected. And looking at the execution plan, everything looks to be in order.

![Execution plan showing optimal index seek](/assets/convert_implicit/Normal.png)

It’s using my `idx_Username` index to perform a seek, which is optimal in this case. So, as a developer of this query, I’m left to think that executing this query should be no problem in my code (which happens to use ADO.NET). However, this is where things get crazy. ADO.NET takes any parameterized queries and wraps them in `sp_executeSql`. This typically is a very good way of ensuring that query plans get cached and reused, parameters are dealt with nicely, and keeps generated code in check to a certain degree. ADO.NET does not know about the username alias, so it passes along the string in the most suitable equivalent type it can determine. The `sp_executeSql` procedure then executes the query:

```sql
-- Execute the query as ADO.NET would generate it
EXECUTE sp_executeSql N'
	SELECT UserId
	FROM Users
	WHERE Username = @Username
', N'@Username nvarchar(13)', N'Administrator'
```

But SQL Server chooses a different execution plan this time, using an index scan instead of a seek!

![Execution plan showing index scan with use of CONVERT_IMPLICIT](/assets/convert_implicit/CONVERT_IMPLICIT.png)

This is crazysauce, and appears to be caused by the fact that `sp_executeSql` executes in a different context from the calling query, which does not have knowledge of the extant user-defined type, `username`. So, the query optimizer in this different context does what it thinks is best and performs a `CONVERT_IMPLICIT` on the value stored in the table before attempting to compare it to the scalar value passed as a system type.

There are a couple of workarounds to this. One is to try to change the type passed in to the `sp_executeSql` query. Doing this in SSMS works just as well as the non-`sp_executeSql` query.

```sql
-- Execute the query as I want ADO.NET to generate it
EXECUTE sp_executeSql N'
	SELECT UserId
	FROM Users
	WHERE Username = @Username
', N'@Username username', N'Administrator'
```

![Execution plan showing optimal index seek](/assets/convert_implicit/Normal.png)

However, ADO.NET does not support passing a non-CLR User-Defined Type name on a `SqlParameter`. So the second option is to re-declare a variable of the correct type inside the query text. Hokey, but it functions:

```sql
-- Execute the query as ADO.NET would generate it, with the workaround
EXECUTE sp_executeSql N'
	DECLARE @_username username = @Username

	SELECT UserId
	FROM Users
	WHERE Username = @_username
', N'@Username nvarchar(13)', N'Administrator'
```

![Normal - with hack](/assets/convert_implicit/Normal-with-hack.png)

This makes me a sad panda. Won’t Microsoft think of the pandas?

![A sad panda](/assets/convert_implicit/Sad-Panda.jpeg)
