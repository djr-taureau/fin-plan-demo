IF EXISTS 
   (
     SELECT name FROM master.dbo.sysdatabases 
    WHERE name = N'lifeworks'
    )
BEGIN
    SELECT 'Database [lifeworks] already exists' AS Message
END
ELSE
BEGIN
    CREATE DATABASE [lifeworks]
    SELECT '[lifeworks] database was created'
END
GO
USE lifeworks
GO