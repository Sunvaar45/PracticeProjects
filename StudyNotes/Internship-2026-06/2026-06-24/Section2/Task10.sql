-- GÖREV 10 — Ders Başına Öğrenci Sayısı
------------------------------------------------------------------------
-- CourseStudents tablosu üzerinden her ders için kaç öğrencinin kayıtlı
-- olduğunu hesapla. Burada GROUP BY ve COUNT fonksiyonunu JOIN ile birlikte
-- kullanman gerekiyor. Sonuçta ders adı ve öğrenci sayısı görünmeli.

-- Sadece satır getirmekle kalmayıp özet bilgi üretmeyi öğreneceksin.

SELECT c.CourseName, count(st.StudentID) AS StudentAmount
FROM CourseStudents cs
INNER JOIN Courses c ON cs.CourseID = c.CourseID
INNER JOIN Students st ON cs.StudentID = st.StudentID
WHERE cs.IsActive = 1 AND cs.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL
	AND st.isActive = 1 AND st.Tombstone IS NULL
GROUP BY c.CourseID, c.CourseName