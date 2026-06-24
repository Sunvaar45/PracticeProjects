-- GÖREV 1 — Öğrenci-Kullanıcı Birleştirme
------------------------------------------------------------------------
-- Öğrenci kayıtları "Students" tablosunda, ancak isim ve soyisim gibi
-- kişisel bilgiler "Users" tablosunda tutuluyor. Students.UserID alanını
-- Users.UserID ile birleştirerek tüm öğrencilerin öğrenci numarasını,
-- adını ve soyadını listele.

-- Bu görevle bir tablodaki yabancı anahtarın (foreign key) başka bir
-- tablonun birincil anahtarına (primary key) nasıl bağlandığını kavrayacaksın.

SELECT s.StudentNumber, u.FirstName, u.LastName
FROM Students s
INNER JOIN Users u ON s.UserID = u.UserID
WHERE s.IsActive = 1 AND s.Tombstone IS NULL
	AND u.IsActive = 1 AND u.Tombstone IS NULL;