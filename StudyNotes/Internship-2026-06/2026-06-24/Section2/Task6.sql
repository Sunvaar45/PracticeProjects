-- GÖREV 6 — Program-Ders İlişkisi
------------------------------------------------------------------------
-- "ProgramCourses" tablosu hangi programın hangi dersleri içerdiğini tutar.
-- Bu tabloyu Programs ve Courses ile birleştirerek program adı ve ders adı
-- çiftlerini listele.

-- Bir programın müfredatını sorguyla çıkarmayı öğreneceksin.

SELECT p.ProgramName, c.CourseName
FROM ProgramCourses pc
INNER JOIN Programs p ON pc.ProgramID = p.ProgramID
INNER JOIN Courses c ON pc.CourseID = c.CourseID
WHERE pc.IsActive = 1 AND pc.Tombstone IS NULL
	AND p.IsActive = 1 AND p.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL