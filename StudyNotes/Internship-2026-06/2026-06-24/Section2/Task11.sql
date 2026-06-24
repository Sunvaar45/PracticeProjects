-- GÖREV 11 — Eğitmen İş Yükü
------------------------------------------------------------------------
-- Her eğitmenin kaç farklı derste görev aldığını CourseInstructors
-- üzerinden GROUP BY ve COUNT(DISTINCT CourseID) ile çıkar. Eğitmen adını
-- da Users tablosundan getir.

-- Gruplamayı JOIN'lerle harmanlama becerini derinleştireceksin.

SELECT u.FirstName, count(DISTINCT c.CourseID) AS CourseAmount
FROM CourseInstructors ci
INNER JOIN Instructors i ON ci.InstructorID = i.InstructorID
INNER JOIN Users u ON i.UserID = u.UserID
INNER JOIN Courses c ON ci.CourseID = c.CourseID
WHERE ci.IsActive = 1 AND ci.Tombstone IS NULL
	AND i.IsActive = 1 AND i.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL
GROUP BY i.InstructorID, u.FirstName