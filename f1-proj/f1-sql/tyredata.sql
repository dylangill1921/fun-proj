/* tire compounds and types data */

/* tire compounds */
INSERT INTO tireCompounds (compoundName) 
VALUES
	('C0'), 
	('C1'), 
	('C2'), 
	('C3'), 
	('C4'), 
	('C5'),
	('C6');

/* tire types */
-- Inserting tire types with sidewall color
INSERT INTO tireTypes (tireTypeName)
VALUES
	('Hard'), 
	('Medium'), 
	('Soft');

INSERT INTO tireTypes(tireTypeName) 
VALUES
	('Intermediate'),
	('Wet');

/* tire type compounds */
-- Inserting mappings for tire type to compound ranges
-- Hard tire mappings
INSERT INTO tireTypeCompounds (TireTypeID, CompoundID) VALUES
	(1, 1), 
	(1, 2), 
	(1, 3); -- Hard can be C1, C2, C3

-- Medium tire mappings
INSERT INTO tireTypeCompounds (TireTypeID, CompoundID) VALUES
	(2, 2), 
	(2, 3), 
	(2, 4); -- Medium can be C2, C3, C4

-- Soft tire mappings
INSERT INTO tireTypeCompounds (TireTypeID, CompoundID) VALUES
	(3, 3), 
	(3, 4), 
	(3, 5); -- Soft can be C3, C4, C5

