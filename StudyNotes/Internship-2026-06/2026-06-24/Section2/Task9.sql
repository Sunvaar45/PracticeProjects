-- GÖREV 9 — Devamsızlık Raporu
------------------------------------------------------------------------
-- 8. görevin tersine, seçtiğin bir öğrencinin IsPresent = 0 olan tüm
-- oturumlarını; ders adı ve oturum tarihiyle birlikte listele.

-- Filtreleme (WHERE) ile JOIN'i birlikte kullanmayı ve belirli bir
-- öğrenciyi parametreyle süzmeyi öğreneceksin.

-- ders adı | slot ve kayıt tarihi | giren ogr sayısı | girmeyen ogr sayısı 

SELECT c.CourseName, 
	CONCAT(sl.DayOfWeek, sl.HourOfDay, ' | ', s.CreaDate) AS Date,
	SUM(CASE WHEN sa.IsPresent = 1 THEN 1 ELSE 0 END) AS PresentStudentAmount,
	SUM(CASE WHEN sa.IsPresent = 0 THEN 1 ELSE 0 END) AS NonPresentStudentAmount
FROM Sessions s
INNER JOIN Courses c ON s.CourseID = c.CourseID
INNER JOIN Slots sl ON s.SlotID = sl.SlotID
INNER JOIN SessionAttendances sa ON s.SessionID = sa.SessionID
WHERE sa.IsActive = 1 AND sa.Tombstone IS NULL
	AND s.IsActive = 1 AND s.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL
GROUP BY s.SessionID, c.CourseName, sl.DayOfWeek, sl.HourOfDay, s.CreaDate