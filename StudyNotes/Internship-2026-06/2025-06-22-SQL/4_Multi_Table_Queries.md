### INNER JOIN
Returns only the records that have matching values in both tables
```sql
SELECT Employees.Name, Departments.DepartmentName
FROM Employees
INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### LEFT JOIN
Returns all records from the left table, and the matched records from the right table. If there is no match, the right side returns NULL.
```sql
SELECT Employees.Name, Departments.DepartmentName
FROM Employees
LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
```

### OUTER APPLY
Similar to LEFT JOIN, but it is specifically used when you need to join a table with a Table-Valued Function or a subquery that must be evaluated row-by-row for the left table.
```sql
SELECT D.DepartmentName, E.LatestEmployee
FROM Departments D
OUTER APPLY (
    SELECT TOP 1 Name AS LatestEmployee
    FROM Employees
    WHERE DepartmentID = D.DepartmentID
    ORDER BY HireDate DESC
) AS E;
```