/* Seasons With Constructors and Race Stats data */
-- unfinished

USE Formula1db;

INSERT INTO seasonsWithConstructors(DriverID, TeamID, entryYear, exitYear, StintID, status)
VALUES	-- Lewis Hamilton
		(1, 4, 2007, 2012, 1, 'Completed'), 
		(1, 1, 2013, 2024, 2, 'Completed'),
		(1, 2, 2025, NULL, 3, 'Active'),
		-- George Russell
		(2, 10, 2022, NULL, 1, 'Completed'),
		(2, 1, 2022, NULL, 2, 'Active'),
		-- Max Verstappen
		(3, 7, 2015, NULL, 1, 'Completed'),
		(3, 3, 2016, NULL, 2, 'Active'),
		-- Sergio Perez
		(4, 27, 2011, 2012, 1, 'Completed'),
		(4, 4, 2013, 2013, 2, 'Completed'),
		(4, 5, 2014, 2020, 3, 'Completed'),
		(4, 3, 2021, 2024, 4, 'Completed'),
		-- Charles Leclerc
		(5, 8, 2018, 2018, 1, 'Completed'),
		(5, 2, 2019, NULL, 2, 'Active'),
		-- Valtteri Bottas
		(6, 10, 2010, 2016, 1, 'Completed'),
		(6, 1, 2017, 2021, 2, 'Completed'),
		(6, 11, 2022, 2023, 3, 'Completed'),
		(6, 8, 2024, 2024, 3, 'Completed'),
		-- Daniel Ricardo
		(7, 7, 2011, 2013, 1, 'Completed'),
		(7, 3, 2014, 2018, 2, 'Completed'),
		(7, 6, 2019, 2020, 3, 'Completed'),
		(7, 4, 2021, 2022, 3, 'Completed'),
		(7, 7, 2023, 2024, 4, 'Completed'),
		-- Lando Norris
		(8, 4, 2019, NULL, 1, 'Active'),
		-- Carlos Sainz
		(9, 7, 2015, 2017, 1, 'Completed'),
		(9, 6, 2017, 2018, 2, 'Completed'),
		(9, 4, 2019, 2020, 3, 'Completed'),
		(9, 2, 2021, 2024, 4, 'Completed'),
		(9, 10, 2025, NULL, 5, 'Active'),
		-- Esteban Ocon
		(10, 5, 2016, 2018, 1, 'Completed'),
		(10, 6, 2020, 2024, 2, 'Completed'),
		(10, 9, 2025, NULL, 3, 'Active'),
		-- Oscar Piastri
		(11, 4, 2023, NULL, 1, 'Active'),
		-- Pierre Gasly
		(12, 7, 2017, 2018, 1, 'Completed'),
		(12, 3, 2019, 2019, 2, 'Completed'),
		(12, 7, 2020, 2022, 3, 'Completed'),
		(12, 6, 2023, NULL, 4, 'Active'),
		-- Lance Stroll
		(13, 10, 2017, 2018, 1, 'Completed'), 
		(13, 5, 2019, NULL, 2, 'Active'), 
		-- Yuki Tsunoda
		(14, 7, 2021, NULL, 1, 'Active'),
		-- Kevin Magnussen
		(15, 4, 2014, 2015, 1, 'Completed'),
		(15, 6, 2016, 2016, 2, 'Completed'),
		(15, 9, 2017, 2020, 3, 'Completed'),
		(15, 9, 2022, 2024, 1, 'Completed'),
		-- Logan Sargeant
		(16, 10, 2023, 2024, 1, 'Completed'),
		-- Zhou Guanyu
		(17, 11, 2022, 2023, 1, 'Completed'),
		(17, 11, 2024, 2024, 2, 'Completed'),
		-- Alexander Albon
		(18, 7, 2019, 2019, 1, 'Completed'),
		(18, 3, 2020, 2020, 2, 'Completed'),
		(18, 10, 2022, NULL, 3, 'Active'),
		-- Niko Hulkenburg
		(19, 10, 2010, 2010, 1, 'Completed'),
		(19, 5, 2012, 2012, 2, 'Completed'),
		(19, 11, 2013, 2013, 3, 'Completed'),
		(19, 5, 2014, 2016, 4, 'Completed'),
		(19, 6, 2017, 2019, 5, 'Completed'),
		(19, 9, 2023, 2024, 6, 'Completed'),
		(19, 8, 2025, NULL, 7, 'Active'),
		-- Fernando Alonso
		(20, 7, 2001, 2001, 1, 'Completed'),
		(20, 6, 2003, 2006, 2, 'Completed'),
		(20, 4, 2007, 2007, 3, 'Completed'),
		(20, 6, 2008, 2009, 4, 'Completed'),
		(20, 2, 2010, 2014, 5, 'Completed'),
		(20, 4, 2015, 2018, 6, 'Completed'),
		(20, 6, 2021, 2022, 7, 'Completed'),
		(20, 5, 2023, NULL, 8, 'Active'),
		-- Oliver Bearman
		(21, 2, 2024, 2024, 1, 'Temporary'),
		(21, 9, 2024, 2024, 2, 'Temporary'),
		(21, 9, 2025, NULL, 3, 'Active'),
		-- Franco Colapinto
		(23, 10, 2024, 2024, 1, 'Completed'),
		-- Liam Lawson
		(24, 7, 2023, 2024, 1, 'Completed'),
		(24, 3, 2025, NULL, 2, 'Active'),
		-- Kimi Antonelli
		(22, 1, 2025, NULL, 1, 'Active'),
		-- Jack Doohan
		(858, 6, 2024, 2024, 1, 'Temporary'),
		(858, 6, 2025, NULL, 2, 'Active'),
		-- Isack Hadjar
		(859, 7, 2025, NULL, 1, 'Active'),
		-- Gabriel Bortoleto
		(860, 8, 2025, NULL, 1, 'Active');

-- Query to select all active drivers
SELECT 
    s.DriverID, 
    d.firstName, 
	d.lastName,
    c.teamName, 
    s.entryYear, 
    s.exitYear, 
    s.status
FROM 
    seasonsWithConstructors s
JOIN 
    drivers d ON s.DriverID = d.DriverID
JOIN 
    constructors c ON s.TeamID = c.TeamID
WHERE 
    s.status = 'Active'
ORDER BY c.TeamID;

/* Race Stats data */
INSERT INTO raceStats(RaceStatsID, RaceID, TrackID, Season, singleLapRecord, topSpeedRecord, prevDriverWinID, prevConstructorWinID
	VALUES  (1, 1, 1, 
			(2, 2, 2,
			(3, 3, 3,
			(4, 4, 4,
			(5, 5, 5,
			(6, 6, 6,
			(7, 7, 7,
			(8, 8, 8,
			(9, 9, 9,
			(10, 10, 10,
			(11, 11, 11,
			(12, 12, 12,
			(13, 13, 13,
			(14, 14, 14,
			(15, 15, 15,
			(16, 16, 16,
			(17, 17, 17,
			(18, 18, 18,
			(19, 19, 19,
			(20, 20, 20,
			(21, 21, 21,
			(22, 22, 22,
			(23, 23, 23,
			(24, 24, 24,
