/* Stored Procedures to retrieve data effectively to display on web */
USE Formula1db;

/* Register a user */
CREATE PROCEDURE spRegisterNewUser
    @StatusID INT,
    @firstName VARCHAR(50),
    @lastName VARCHAR(50),
    @userName VARCHAR(50),
    @password VARCHAR(255),
    @email VARCHAR(255),
    @phoneNumber VARCHAR(20),
    @dateOfBirth DATE,
    @country CHAR(3),
    @favouriteDriver VARCHAR(100),
    @favouriteConstructor VARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Insert the new user into the 'users' table
    INSERT INTO users (
        StatusID,
        firstName,
        lastName,
        userName,
        password,
        email,
        phoneNumber,
        dateOfBirth,
        country,
        favouriteDriver,
        favouriteConstructor
    )
    VALUES (
        @StatusID,
        @firstName,
        @lastName,
        @userName,
        @password,
        @email,
        @phoneNumber,
        @dateOfBirth,
        @country,
        @favouriteDriver,
        @favouriteConstructor
    );

    -- Return the newly created user's ID
    SELECT SCOPE_IDENTITY() AS UserID;
END;

/* Login a user */


/* Display 1/20 Drivers */


/* Display 1/10 teams */


/* Display track information */


/* Display Race information */


/* Display Schedule information */


/* Display user infromation */


/* Display Seasons with constructor */

