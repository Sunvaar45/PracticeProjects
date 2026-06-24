-- GÖREV 5 — Ders Veren Eğitmenler
------------------------------------------------------------------------
-- "CourseInstructors" ara tablosu eğitmenlerle dersleri eşleştiriyor. Bu
-- tabloyu Instructors -> Users ve Courses ile birleştirerek her dersi
-- hangi eğitmenin verdiğini ad-soyad olarak listele.

-- 4. görevdeki ara tablo mantığını farklı bir varlık üzerinde tekrar
-- ederek pekiştireceksin.

SELECT c.CourseName, u.FirstName, u.LastName
FROM CourseInstructors ci
INNER JOIN Instructors i ON ci.InstructorID = i.InstructorID
INNER JOIN Users u ON i.UserID = u.UserID
INNER JOIN Courses c ON ci.CourseID = c.CourseID
WHERE ci.IsActive = 1 AND ci.Tombstone IS NULL
	AND i.IsActive = 1 AND i.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL