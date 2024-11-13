---
title: Using RAISERROR instead of PRINT for informational messages
tags: programming sql
published_at: https://blog.thzinc.com/post/78048030833/using-raiserror-instead-of-print-for-informational
---

Here’s a neat tidbit I found recently while working deep in some ETL scripts written in T-SQL: You can use `RAISERROR` with a severity of `0` as you would use `PRINT` in order to print out informational messages, and `RAISERROR` has a nifty option to write the message out immediately to the client. (Unlike `PRINT`, which waits for various things before printing messages.)

For example, the following each print out This is a very informational message.

```sql
PRINT 'This is a very informational message.'

RAISERROR('This is a very informational message.', 0, 0) WITH NOWAIT
```

The `WITH NOWAIT` is the magic here to force the message to appear to the client immediately upon execution.
