USE [master]
GO

IF DB_ID('hwpv') IS NOT NULL
  DROP DATABASE [hwpv];
  GO

CREATE DATABASE [hwpv];
GO

-- USE [hwpvinternal]
-- GO
