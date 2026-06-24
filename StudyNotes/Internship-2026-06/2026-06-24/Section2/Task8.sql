-- GÖREV 8 — Yoklama Detayı
------------------------------------------------------------------------
-- Yoklama kayıtları "SessionAttendances" tablosunda; her kayıt bir oturuma
-- (Sessions) ve bir öğrenciye (Students) bağlı. Belirli bir oturumda
-- yoklamaya katılan (IsPresent = 1) öğrencilerin adlarını getir.
-- SessionAttendances -> Sessions -> Courses ve
-- SessionAttendances -> Students -> Users şeklinde iki kol birden kuracaksın.

-- Gerçek bir iş senaryosunu modelleyen ilk ileri görevin.

SELECT u.FirstName
FROM SessionAttendances sa
INNER JOIN Sessions s ON sa.SessionID = s.SessionID
INNER JOIN Courses c ON s.CourseID = c.CourseID
INNER JOIN Students st ON sa.StudentID = st.StudentID
INNER JOIN Users u ON st.UserID = u.UserID
WHERE s.SessionID = 1 AND sa.IsPresent = 1
	AND sa.IsActive = 1 AND sa.Tombstone IS NULL
	AND s.IsActive = 1 AND s.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL
	AND st.IsActive = 1 AND st.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL