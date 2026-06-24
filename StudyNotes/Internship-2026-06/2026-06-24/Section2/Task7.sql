-- GÖREV 7 — Ders Programı (Slot) Sorgusu
------------------------------------------------------------------------
-- Bir dersin haftanın hangi gün ve saatinde işlendiği "Slots" tablosunda
-- (DayOfWeek, HourOfDay), bunların hangi pattern'e ait olduğu ise
-- "PatternSlots" ara tablosunda. Önce dersin pattern'ini bul
-- (Courses -> Patterns), ardından PatternSlots -> Slots zinciriyle o
-- pattern'e ait tüm gün/saat dilimlerini listele.

-- Dört tabloluk anlamlı bir zincir kurmayı öğreneceksin.

SELECT c.CourseName, s.DayOfWeek, s.HourOfDay
FROM Courses c
INNER JOIN Patterns p ON c.PatternID = p.PatternID
INNER JOIN PatternSlots ps ON p.PatternID = ps.PatternID
INNER JOIN Slots s on ps.SlotID = s.SlotID
WHERE c.IsActive = 1 AND c.Tombstone is NULL
	AND p.IsActive = 1 AND p.Tombstone is NULL
	AND ps.IsActive = 1 AND ps.Tombstone is NULL