USE [master]
GO

IF DB_ID('hwpv-local') IS NOT NULL
  DROP DATABASE [hwpv-local];
  GO

CREATE DATABASE [hwpv-local];
GO
