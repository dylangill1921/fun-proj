/* Formula 1 Tables */
USE Formula1db;

/* Create users table and check for data */
PRINT '-- Users Table --';
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    UserID INT IDENTITY(1, 1) PRIMARY KEY, -- Unique identifier for each user
    StatusID INT,
    firstName VARCHAR(50) NOT NULL, -- First name of the usera
    lastName VARCHAR(50) NOT NULL, -- Last name of the user
    userName VARCHAR(50) NOT NULL UNIQUE, -- Username chosen by the user
    password VARCHAR(255) NOT NULL, -- Password chosen by the user
    email VARCHAR(255) NOT NULL, -- Email address of the user
    phoneNumber VARCHAR(20) NOT NULL, -- Phone number of the user
    subscriptionStatus VARCHAR(20) NOT NULL, -- Subscription status of the user
    dateOfBirth DATE NOT NULL, -- Date of birth of the user
    country CHAR(3) NOT NULL, -- Country of the user
    favouriteDriver VARCHAR(100) NOT NULL,
    favouriteConstructor VARCHAR(100) NOT NULL,
    CONSTRAINT FK_SubscriptionStatus FOREIGN KEY (StatusID) REFERENCES subscriptions(StatusID)
);

SELECT * FROM users;

/* Create subscriptions table and check for data */
PRINT '-- Subscriptions Table --';
DROP TABLE IF EXISTS subscriptions;
CREATE TABLE subscriptions (
    StatusID INT PRIMARY KEY, -- Unique identifier for each status
    statusName VARCHAR(50) NOT NULL UNIQUE -- Name of the subscription status
);

SELECT * FROM subscriptions;

/* Create drivers table and check for data */
PRINT '-- Drivers Table --';
DROP TABLE IF EXISTS drivers;
CREATE TABLE drivers (
    DriverID INT PRIMARY KEY,
    TeamID INT, -- Unique identifier for each driver
	CountryID INT,
    firstName VARCHAR(50) NOT NULL, -- First name of the driver
    lastName VARCHAR(50) NOT NULL, -- Last name of the driver
    nationality VARCHAR(30) NOT NULL, -- Nationality of the driver
    dateOfBirth DATE NOT NULL, -- Date of birth
    born VARCHAR(100) NOT NULL, -- Where the driver was born
    helmutColour VARCHAR(10) NOT NULL, -- Helmet color
    number INT NOT NULL, -- Number of the driver
    CONSTRAINT CHK_Number_Range CHECK (number >= 1 AND number <= 99), -- Ensure drivers number is between 1-99
	CONSTRAINT FK_CountryForDriver FOREIGN KEY (CountryID) REFERENCES countries(CountryID)
);

SELECT * FROM drivers;

ALTER TABLE drivers
ALTER COLUMN nationality VARCHAR(30) NULL; -- Allow NULL values for nationality

ALTER TABLE drivers
ALTER COLUMN dateOfBirth DATE NULL; -- Allow NULL values for dateOfBirth

ALTER TABLE drivers
ALTER COLUMN born VARCHAR(100) NULL; -- Allow NULL values for born

ALTER TABLE drivers
ALTER COLUMN helmutColour VARCHAR(10) NULL;

ALTER TABLE drivers
ALTER COLUMN number INT NULL;

/* Create constructors table and check for data */
PRINT '-- Constructors Table --';
DROP TABLE IF EXISTS constructors;
CREATE TABLE constructors (
    TeamID INT PRIMARY KEY, -- Unique identifier
	CountryID INT, -- fk to Country's table
    teamName VARCHAR(100) NOT NULL, -- Team name
    headquarters VARCHAR(100) NOT NULL, -- Headquarters location
    principal VARCHAR(50) NOT NULL, -- Principal of the team
    engineSupplier VARCHAR(50) NOT NULL, -- Engine supplier of the team
    startYear DATE NOT NULL, -- Year they started in F1
    constructorTitles INT NOT NULL, -- Number of constructor titles won
    wins INT NULL, -- Number of wins
    poles INT NULL, -- Number of pole positions
    fastestLaps INT NULL, -- Number of fastest laps
	CONSTRAINT FK_CountryForTeam FOREIGN KEY (CountryID) REFERENCES countries(CountryID)
);

SELECT * FROM constructors;

/* Create seasonswithconstructor table and check for data */
PRINT '-- Seasons With Constructor Table --';
DROP TABLE IF EXISTS seasonsWithConstructors;
CREATE TABLE seasonsWithConstructors (
    DriverID INT, -- Driver's unique ID
    TeamID INT, -- Constructor's unique ID
    entryYear INT NOT NULL, -- Year driver joined the team
    exitYear INT, -- Year driver left the team (can be NULL if still active)
    stintID INT NOT NULL, -- Identifier for each separate stint during the year
    status VARCHAR(50), -- Status of the stint: 'Active', 'Completed', 'Temporary'
    PRIMARY KEY (DriverID, TeamID, entryYear, stintID), -- Composite primary key
    FOREIGN KEY (DriverID) REFERENCES drivers(DriverID),
    FOREIGN KEY (TeamID) REFERENCES constructors(TeamID),
    CONSTRAINT CHK_endYear_After_entryYear CHECK (exitYear IS NULL OR exitYear >= entryYear) -- Ensure exitYear is not before entryYear or handle NULL
);

SELECT * FROM seasonsWithConstructors;

/* Create races table and check for data */
PRINT '-- Races Table --';
DROP TABLE IF EXISTS races;
CREATE TABLE races (
    RaceID INT PRIMARY KEY,
    GrandPrixID INT,
    TrackID INT NOT NULL, -- Foreign Key to Tracks
    startDate DATETIME2 NOT NULL, -- Start of the race weekend, includes time
    endDate DATETIME2 NOT NULL, -- End of the race weekend, includes time
    weatherConditions VARCHAR(255) NULL, -- Allows more detailed weather descriptions
    CONSTRAINT CHK_EndDate_After_StartDate CHECK (endDate >= startDate), -- Ensures end date is not before the start date
    CONSTRAINT FK_Grand_Prix FOREIGN KEY (GrandPrixID) REFERENCES grandPrix(GrandPrixID),
    CONSTRAINT FK_Race_Track FOREIGN KEY (TrackID) REFERENCES tracks(TrackID) -- Establishes relationship with Tracks table
);

SELECT * FROM races; 

/* Grand Prix Table */
PRINT '-- grandPrix --';
DROP TABLE IF EXISTS grandPrix;
CREATE TABLE grandPrix (
	GrandPrixID INT IDENTITY(1, 1) PRIMARY KEY,
	GpName	VARCHAR(100) NOT NULL
);

/* Create racestats table and check for data */
PRINT '-- Race Stats Table --';
DROP TABLE IF EXISTS raceStats;
CREATE TABLE raceStats (
    RaceStatsID INT PRIMARY KEY,
    RaceID INT NOT NULL,
    TrackID INT NOT NULL, -- Foreign Key to Tracks
    Season INT NOT NULL, -- Tracks the season for these stats
    sprintRaceRecord TIME NULL, -- Time for sprint races
    singleLapRecord TIME NULL, -- Best single lap time
    topSpeedRecord DECIMAL(8, 3) NULL, -- Top speed reached in km/h
    prevDriverWinID INT, -- ID for driver who won previously
    prevConstructorWinID INT, -- ID for constructor team that won previously
    CONSTRAINT FK_Race_Stats FOREIGN KEY (RaceID) REFERENCES races(RaceID), -- Establishes relationship with Races table
    CONSTRAINT FK_RaceStats_Track FOREIGN KEY (TrackID) REFERENCES tracks(TrackID), -- Establishes relationship with Tracks table 
    CONSTRAINT fk_prevDriverWin FOREIGN KEY (prevDriverWinID) REFERENCES drivers(DriverID), -- Links to previous winning driver
    CONSTRAINT fk_prevConstructorWin FOREIGN KEY (prevConstructorWinID) REFERENCES constructors(TeamID) -- Links to previous winning constructor team
);

SELECT * FROM raceStats;

/* Create tracks table and check for data */
PRINT '-- Tracks Table --';
DROP TABLE IF EXISTS tracks;
CREATE TABLE tracks (
    TrackID INT PRIMARY KEY, 
    trackName VARCHAR(100) NOT NULL, 
    CountryID INT, 
    city VARCHAR(50) NOT NULL,  
    numTurns INT NOT NULL,
    laps INT NOT NULL,
    fullRaceLength DECIMAL(8, 3) NOT NULL,
    lapLength DECIMAL(8, 3) NOT NULL,
    surfaceType VARCHAR(50) NOT NULL,
    CONSTRAINT fk_country FOREIGN KEY (CountryID) REFERENCES countries(CountryID)
);
-- error in table data
ALTER TABLE tracks ALTER COLUMN surfaceType VARCHAR(150);

SELECT * FROM tracks;

/* Create articles table and check for data */
PRINT '-- Articles Table --';
DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
    ArticleID INT PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    author VARCHAR(100) NOT NULL, 
    publishedDate DATE NOT NULL, 
    category VARCHAR(50) NOT NULL, 
    tags VARCHAR(255) 
);

SELECT * FROM articles;

/* Create countries table and check for data */
PRINT '-- Countries Table --';
DROP TABLE IF EXISTS countries;
CREATE TABLE countries (
    CountryID   INT PRIMARY KEY,      -- Unique identifier for each country
    CountryName VARCHAR(100) NOT NULL UNIQUE  -- Name of the country
);

SELECT * FROM countries;

/* Tire Types */
PRINT '-- Tire Types Table --';
DROP TABLE IF EXISTS tireTypes;
CREATE TABLE tireTypes (
    TireTypeID INT IDENTITY(1, 1) PRIMARY KEY, -- Unique identifier for each tire type
    tireTypeName VARCHAR(20) NOT NULL -- Types like 'Slicks', 'Intermediates', 'Wets'
);

SELECT * FROM tireTypes;

/* Tire Compounds */
PRINT '-- Tire Compounds Table --';
DROP TABLE IF EXISTS tireCompounds;
CREATE TABLE tireCompounds (
    CompoundID INT IDENTITY(1, 1) PRIMARY KEY, -- Unique identifier for each compound
    compoundName VARCHAR(5) NOT NULL, -- Names like 'C1', 'C2', 'C3', 'C4', 'C5' for slicks, and general identifiers for wets
);

SELECT * FROM tireCompounds;

/* tire type compound junction table */
PRINT '-- Tire Type Compounds Table --';
DROP TABLE IF EXISTS tireTypeCompounds;
CREATE TABLE tireTypeCompounds (
    TireTypeID INT,
    CompoundID INT,
    PRIMARY KEY (TireTypeID, CompoundID),
    FOREIGN KEY (TireTypeID) REFERENCES tireTypes(TireTypeID),
    FOREIGN KEY (CompoundID) REFERENCES tireCompounds(CompoundID)
);