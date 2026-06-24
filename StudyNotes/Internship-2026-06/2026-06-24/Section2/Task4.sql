-- GÖREV 4 — Öğrenci-Ders Kayıtları (Ara Tablo)
------------------------------------------------------------------------
-- Bir öğrenci birden çok derse, bir ders de birden çok öğrenciye kayıtlı
-- olabilir. Bu çoka-çok ilişki "CourseStudents" ara tablosuyla çözülmüş.
-- CourseStudents tablosunu hem Students'a (oradan Users'a) hem de Courses'a
-- bağlayarak "hangi öğrenci hangi derse kayıtlı" sorusunu yanıtla.
-- Sonuçta öğrenci adı ve ders adı görünmeli.

-- Bu görev ara tablo (junction table) kavramını anlaman için kritik.

SELECT u.FirstName, u.LastName, c.CourseName
FROM CourseStudents cs
INNER JOIN Students s ON cs.StudentID = s.StudentID
INNER JOIN Users u ON s.UserID = u.UserID
INNER JOIN Courses c ON cs.CourseID = c.CourseID
WHERE cs.IsActive = 1 AND cs.Tombstone IS NULL
	AND s.IsActive = 1 AND s.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL