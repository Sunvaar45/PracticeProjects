### 1. Primary Key (PK)
The column that uniquely identifies each row in a table.
* Cannot be NULL.
* Values must be unique.
* Usually an `ID` column (e.g., `StudentID`, `EmployeeID`).

### 2. Foreign Key (FK)
A column that links two tables together by referencing the Primary Key of another table.
* Maintains data integrity (e.g., prevents assigning a non-existent `DepartmentID` to an employee).

### 3. Many-to-Many (N:N) Relationships
Occurs when multiple records in one table are related to multiple records in another.
* Relational databases cannot handle direct N:N relationships. You must use a Junction Table (bridge/mapping table) to split it into two 1:N relationships.

### Example: Students and Courses
1. **Students Table:** `StudentID` (PK), `Name`
2. **Courses Table:** `CourseID` (PK), `CourseName`
3. **StudentCourses (Junction Table):** `StudentID` (FK), `CourseID` (FK)