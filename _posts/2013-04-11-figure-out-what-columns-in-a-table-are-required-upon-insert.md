---
title: Figure out what columns in a table are required upon insert
tags: programming sql
published_at: https://blog.thzinc.com/post/78370732749/figure-out-what-columns-in-a-table-are-required
---

Quick query to determine which columns of a table must be assigned values on `INSERT`:

```sql
SELECT
	OBJECT_NAME(c.object_id),
	c.name
FROM sys.COLUMNS c
LEFT JOIN sys.default_constraints dc ON (c.default_object_id = dc.object_id)
WHERE c.is_nullable = 0
AND dc.object_id IS NULL
AND c.is_identity = 0
AND c.object_id = OBJECT_ID('Table Name')
ORDER BY 1, 2
```

Where `'Table Name'` should represent the name of the table you wish to inspect.
