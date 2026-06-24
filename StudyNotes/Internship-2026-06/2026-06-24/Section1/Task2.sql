-- GÖREV 2 — Ders-Pattern Birleştirme
------------------------------------------------------------------------
-- Her dersin bir PatternID değeri var; bu, dersin haftalık ders programı
-- kalıbına işaret ediyor. Courses.PatternID ile Patterns.PatternID
-- alanlarını birleştirerek her dersin adını ve ait olduğu pattern kodunu
-- yan yana getir.

-- Tek bir basit ilişki üzerinden JOIN mantığını pekiştireceksin.

SELECT c.CourseName, p.PatternCode
FROM Courses c
INNER JOIN Patterns p ON c.PatternID = p.PatternID
WHERE c.IsActive = 1 AND c.Tombstone IS NULL
	AND p.IsActive = 1 AND p.Tombstone IS NULL