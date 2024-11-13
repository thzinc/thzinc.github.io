---
title: Table-Valued Parameters
tags: programming csharp dotnet sql
published_at: https://blog.thzinc.com/post/76263243734/table-valued-parameters
---

Have you ever found yourself working in T-SQL and thought, “Query parameters are great for individual values, but what I really want is a way to pass an array–or even a table–into my query.” I have, and I was pleased to discover that starting in SQL Server 2008, a feature called [Table-Valued Parameters][tvp-docs] (TVP) exists.

With TVP, it becomes possible to pass in a table variable to a query or stored procedure, so long as a proper table type has been defined for it. Table types are simply stored table schemas that may be used to create a table variable. For example, the following two T-SQL statements produce a table variable with the same schema.

```sql
DECLARE @table1 TABLE (
    tableId INT NOT NULL,
    VALUE nvarchar(64)
)

CREATE TYPE tableType AS TABLE (
    tableId INT NOT NULL,
    VALUE nvarchar(64)
)

DECLARE @table2 tableType -- Has the same columns, tableId and value, as @table1
```

When using TVPs in stored procedures, the table type must be used as the type for the parameter because the verbose `TABLE (...)` syntax is not allowed.

```sql
CREATE PROCEDURE proc1 (@TABLE tableType) AS BEGIN
    SELECT tableId, VALUE
    FROM @TABLE
END
```

This is all great if you are working entirely in T-SQL because it’s possible to build and pass around table variables with ease. However, in other programming languages that communicate with SQL Server, it is a little less apparent how to work with TVPs. However, in .NET, this is made possible by passing [DataTables][datatable-docs] into query parameters.

```csharp
/* Build the DataTable */
DataTable table = new DataTable();
table.Columns.Add("tableId", typeof(int));
table.Columns.Add("value", typeof(string));

/* Populate the DataTable with some rows */
DataRow row = table.NewRow();
row["tableId"] = 1,
row["value"] = "foobar";
table.Rows.Add(row);

SqlCommand command; // Set up as normal
command.CommandText = "proc1";

SqlParameter tableParam = command.Parameters.Add("@table", SqlDbType.Structured); // Inform the command that the parameter is a TVP, or "structured" type
tableParam.Value = table;
tableParam.TypeName = "tableType"; // Set the parameter's type name to the table type declared in T-SQL earlier
/* ... Execute command as desired ... */
```

So, if you are running SQL Server 2008 (or greater), you too can pass tables of information into your queries and stored procedures.

[tvp-docs]: https://learn.microsoft.com/en-us/sql/relational-databases/tables/use-table-valued-parameters-database-engine?view=sql-server-ver16&redirectedfrom=MSDN
[datatable-docs]: https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable?view=net-8.0&redirectedfrom=MSDN
