-- GÖREV 12 — Karma Yoklama Yüzdesi (EN ZOR / BİTİRME GÖREVİ)
------------------------------------------------------------------------
-- Seçtiğin bir programdaki öğrencilerin, o programa ait derslerdeki katılım
-- yüzdesini hesapla.
-- Programs -> ProgramCourses -> Courses -> Sessions -> SessionAttendances
-- zinciriyle her öğrencinin toplam oturum sayısını ve katıldığı oturum
-- sayısını oranla.

-- İpucu: katılım sayısını
-- SUM(CASE WHEN IsPresent = 1 THEN 1 ELSE 0 END)
-- ile hesaplayabilirsin.

-- Birden çok JOIN, gruplama, koşullu sayma ve oran hesabını bir arada
-- kullandığın bitirme niteliğinde bir görev.

SELECT st.StudentNumber,
	Concat('%',
		SUM(CASE WHEN IsPresent = 1 THEN 1 ELSE 0 END) * 100 / Count(sa.StudentID)
	) AS AttendancePercentage
FROM Programs p
INNER JOIN ProgramCourses pc ON p.ProgramID = pc.ProgramID
INNER JOIN Courses c ON pc.CourseID = c.CourseID
INNER JOIN Sessions s ON c.CourseID = s.CourseID
INNER JOIN SessionAttendances sa ON s.SessionID = sa.SessionID
INNER JOIN Students st ON sa.StudentID = st.StudentID
WHERE p.ProgramID = 1
	AND pc.IsActive = 1 AND pc.Tombstone IS NULL
	AND c.IsActive = 1 AND c.Tombstone IS NULL
	AND s.IsActive = 1 AND s.Tombstone IS NULL
	AND sa.IsActive = 1 AND sa.Tombstone IS NULL
	AND st.IsActive = 1 AND st.Tombstone IS NULL
GROUP BY st.StudentNumber