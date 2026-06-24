### SELECT
```sql
SELECT column1, column2
FROM table_name
WHERE condition;

SELECT FirstName, LastName 
FROM Employees 
WHERE Department = 'Engineering';
```
### INSERT
```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);

INSERT INTO Employees (FirstName, LastName, Department)
VALUES ('Ismail', 'Kalay', 'Engineering');
```

### UPDATE
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

UPDATE Employees
SET Department = 'Management'
WHERE LastName = 'Kalay';
```

### DELETE
```sql
DELETE FROM table_name
WHERE condition;

DELETE FROM Employees
WHERE LastName = 'Kalay';
```