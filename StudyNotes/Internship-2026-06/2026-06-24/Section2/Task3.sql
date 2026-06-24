-- GÖREV 3 — Eğitmen-Bölüm Birleştirme
------------------------------------------------------------------------
-- Eğitmenin kişisel bilgisi "Users" tablosunda, bağlı olduğu bölüm bilgisi
-- "Departments" tablosunda, ikisini birbirine bağlayan kayıt ise
-- "Instructors" tablosunda. Instructors tablosunu hem Users'a hem de
-- Departments'a bağlayarak her eğitmenin ad-soyadını ve bölüm adını listele.

-- Birden fazla JOIN'i zincirleme kullanmayı öğreneceksin.

SELECT u.FirstName, u.LastName, d.DepartmentName
FROM Instructors i
INNER JOIN Users u ON i.UserID = u.UserID
INNER JOIN Departments d ON i.DepartmentID = d.DepartmentID
WHERE i.IsActive = 1 AND i.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL
	AND d.IsActive = 1 AND d.Tombstone IS NULL