/* formula 1 tables */
USE Formula1db;

/* tracks table */
SELECT * FROM tracks;

INSERT INTO tracks (TrackID, trackName, CountryID, city, numTurns, laps, fullRaceLength, lapLength, surfaceType)
VALUES 
	(1, 'Bahrain International Circuit', 13, 'Sakhir', 15, 57, 308.238, 5.412, 'Asphalt Quality Rating: 5/5 - High-Grip Desert Circuit Surface'),
	(2, 'Jeddah Corniche Circuit', 151, 'Jeddah', 27, 50, 308.450, 6.174, 'Asphalt Quality Rating: 4/5 - High-Speed Street Circuit Surface'),
	(3, 'Melbourne Circuit', 9, 'Melbourne', 14, 58, 306.124, 5.278, 'Asphalt Quality Rating: 5/5 - High-Grip Street Circuit with Freshly Resurfaced Track'),
	(4, 'Suzuka Circuit', 84, 'Suzuka', 18, 53, 307.471, 5.807, 'Asphalt Quality Rating: 5/5 - High-Grip Dedicated Racing Circuit Surface'),
	(5, 'Shanghai International Circuit', 36, 'Shanghai', 16, 56, 305.066, 5.451, 'Asphalt Quality Rating: 4/5 - Smooth High-Grip Circuit with Occasional Wear in Heavy Braking Zones'), 
	(6, 'Miami International Autodrome', 185, 'Miami', 19, 57, 308.33, 5.41, 'Asphalt Quality Rating: 3/5 - New Street Circuit Surface with Variable Grip and Limited Rubbering'), 
	(7,	'Autodromo Enzo e Dino Ferrari', 82, 'Imola', 19, 63, 309.049, 4.909, 'Asphalt Quality Rating: 4/5 - Well-Maintained Racing Circuit with High Grip and Mild Wear in Key Corners'),
	(8, 'Circuit de Monaco', 32, 'Monte Carlo', 18, 78, 260.286, 3.337, 'Asphalt Quality Rating: 4/5 - Well-Maintained Racing Circuit with High Grip and Mild Wear in Key Corners'),
	(9, 'Circuit Gilles Villeneuve', 114, 'Montreal', 14, 70, 305.270, 4.361, 'Asphalt Quality Rating: 4/5 - Smooth Street Circuit with Moderate Grip and Occasional Bumps'),
	(10, 'Circuit de Barcelona-Catalunya', 163, 'Barcelona', 16, 66, 307.362, 4.657, 'Asphalt Quality Rating: 4/5 - High-Grip Circuit with Mild Surface Wear in Key Corners'),
	(11, 'Red Bull Ring', 10, 'Spielberg', 10, 71, 306.452, 4.318, 'Asphalt Quality Rating: 5/5 - High-Grip Racing Circuit with Smooth and Consistent Surface'),
	(12, 'Silverstone Circuit', 185, 'Silverstone', 18, 52, 306.198, 5.891, 'Asphalt Quality Rating: 4/5 - High-Grip Circuit with Some Wear in High-Stress Corners'),
	(13, 'Hungaroring', 74, 'Budapest', 16, 70, 306.630, 4.014, 'Asphalt Quality Rating: 4/5 - High-Grip Circuit with Mild Wear in Tight Corners'),
	(14, 'Spa-Francorchamps', 17, 'Spa-Francorchamps', 20, 44, 308.052, 7.004, 'Asphalt Quality Rating: 4/5 - Smooth High-Grip Circuit with Mild Wear in Long Corners'),
	(15, 'Circuit Zandovoort', 123, 'Zandvoort', 14, 72, 306.648, 4.259, 'Asphalt Quality Rating: 4/5 - High-Grip Circuit with Smooth Surface and Some Degradation in High-Load Zones'),
	(16, 'Autodromo Nazionale Monza', 82, 'Monza', 11, 53, 306.72, 5.793, 'Asphalt Quality Rating: 4/5 - Smooth High-Speed Circuit with Mild Wear in Braking Zones'),
	(17, 'Baku City Circuit', 11, 'Baku', 20, 51, 306.049, 6.003, 'Asphalt Quality Rating: 3/5 - Street Circuit with Variable Grip and Frequent Surface Degradation'),
	(18, 'Marina Bay Street Circuit', 156, 'Marina Bay', 19, 61, 308.706, 5.063, 'Asphalt Quality Rating: 3/5 - Street Circuit with Variable Grip and Frequent Surface Degradation'),
	(19, 'Circuit of the Americas', 186, 'Austin', 20, 56, 308.405, 5.513, 'Asphalt Quality Rating: 4/5 - High-Grip Circuit with Some Wear in Heavy Braking Zones'),
	(20, 'Autódromo Hermanos Rodríguez', 111, 'Mexico City', 17, 71, 305.354, 4.304, 'Asphalt Quality Rating: 4/5 - Smooth Circuit with High Grip and Mild Wear in Key Corners'), 
	(21, 'Autódromo José Carlos Pace', 24, 'São Paulo', 15, 71, 305.879, 4.309, 'Asphalt Quality Rating: 4/5 - Well-Maintained Circuit with High Grip and Mild Wear in Heavy Braking Zones'), 
	(22, 'Las Vegas Street Circuit', 186, 'Paradise', 17, 50, 309.958, 6.201, 'Asphalt Quality Rating: 3/5 - New Street Circuit with Variable Grip and Early Surface Degradation'),
	(23, 'Losail Circuit', 141, 'Doha', 16, 57, 308.611, 5.419, 'Asphalt Quality Rating: 4/5 - Smooth, High-Grip Circuit with Mild Wear in High-Speed Sections'),
	(24, 'Yas Marina Circuit', 184, 'Abu Dhabi', 21, 58, 306.183, 5.554, 'Asphalt Quality Rating: 4/5 - Smooth, High-Grip Circuit with Mild Wear in Key Braking Zones');

SELECT * FROM tracks;
ALTER TABLE tracks
ALTER COLUMN surfaceType VARCHAR(150);

/* races table */
SELECT * FROM races;

INSERT INTO races (RaceID, TrackID, GrandPrixID, startDate, endDate, weatherConditions)
VALUES
    (1, 1, 1, '2024-03-02 10:00:00', '2024-03-02 13:00:00', 'Hot Sunny Day!'),
    (2, 2, 2, '2024-03-09 12:00:00', '2024-03-09 15:00:00', 'Sunny and dry all day.'),
    (3, 3, 3, '2024-03-24 00:00:00', '2024-03-24 03:00:00', 'Slightly cloudy...'),
    (4, 4, 4, '2024-04-07 01:00:00', '2024-04-07 04:00:00', NULL),
    (5, 5, 5, '2024-04-21 03:00:00', '2024-04-21 06:00:00', NULL),
    (6, 6, 6, '2024-05-05 16:00:00', '2024-05-05 19:00:00', NULL),
    (7, 7, 7, '2024-05-19 09:00:00', '2024-05-19 12:00:00', NULL),
    (8, 8, 8, '2024-05-26 09:00:00', '2024-05-26 12:00:00', NULL),
    (9, 9, 9, '2024-06-09 14:00:00', '2024-06-09 17:00:00', NULL),
    (10, 10, 10, '2024-06-23 09:00:00', '2024-06-23 12:00:00', NULL),
    (11, 11, 11, '2024-06-30 09:00:00', '2024-06-30 12:00:00', NULL),
    (12, 12, 12, '2024-07-07 10:00:00', '2024-07-07 13:00:00', NULL),
    (13, 13, 13, '2024-07-21 09:00:00', '2024-07-21 12:00:00', NULL),
    (14, 14, 14, '2024-07-28 09:00:00', '2024-07-28 12:00:00', NULL),
    (15, 15, 15, '2024-08-25 09:00:00', '2024-08-25 12:00:00', NULL),
    (16, 16, 16, '2024-09-01 09:00:00', '2024-09-01 12:00:00', NULL),
    (17, 17, 17, '2024-09-15 07:00:00', '2024-09-15 10:00:00', NULL),
    (18, 18, 18, '2024-09-22 08:00:00', '2024-09-22 11:00:00', NULL),
    (19, 19, 19, '2024-10-20 15:00:00', '2024-10-20 18:00:00', NULL),
    (20, 20, 20, '2024-10-27 16:00:00', '2024-10-27 19:00:00', NULL),
    (21, 21, 21, '2024-11-03 12:00:00', '2024-11-03 15:00:00', NULL),
    (22, 22, 22, '2024-11-24 01:00:00', '2024-11-24 04:00:00', NULL),
    (23, 23, 23, '2024-12-01 12:00:00', '2024-12-01 15:00:00', NULL),
    (24, 24, 24, '2024-12-08 08:00:00', '2024-12-08 11:00:00', NULL);

/* Grand Prix data */
SELECT * FROM grandPrix;

INSERT INTO grandPrix (GpName)
VALUES
	('Bahrain Grand Prix'),
    ('Saudi Arabian Grand Prix'),
    ('Australian Grand Prix'),
    ('Japanese Grand Prix'),
    ('Chinese Grand Prix'),
    ('Miami Grand Prix'),
    ('Emilia Romagna Grand Prix'),
    ('Monaco Grand Prix'),
    ('Canadian Grand Prix'),
    ('Spanish Grand Prix'),
    ('Austrian Grand Prix'),
    ('British Grand Prix'),
    ('Hungarian Grand Prix'),
    ('Belgian Grand Prix'),
    ('Dutch Grand Prix'),
    ('Italian Grand Prix'),
    ('Azerbaijan Grand Prix'),
    ('Singapore Grand Prix'),
    ('United States Grand Prix'),
    ('Mexican Grand Prix'),
    ('Brazilian Grand Prix'),
    ('Las Vegas Grand Prix'),
    ('Qatar Grand Prix'),
    ('Abu Dhabi Grand Prix');