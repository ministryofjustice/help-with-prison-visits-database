# Help with Prison Visits Database migrations

Contains the database scripts necessary to setup the MS SQL Database instance used for APVS (Assisted Prison Visit Scheme).

These are the helper scripts to setup and clear down the database. The main migration scripts necessary to setup the database schema live in the [help-with-prison-visits-external](https://github.com/ministryofjustice/help-with-prison-visits-external.git) and [help-with-prison-visits-internal](https://github.com/ministryofjustice/help-with-prison-visits-internal.git).

## Requires

* [NodeJS 16](https://nodejs.org)
* [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Environment

Use a `.env` file to setup environment variables, you will use these in your other apps. Ensure that `HWPV_DATABASE` is set to match whatever you are using in `./mssql-startup/mssql-hwpv.sql` 

An example password is used which meets the complexity requirements of SQL Server:

```
HWPV_DATABASE='hwpv-local'
HWPV_DATABASE_SERVER='localhost'

HWPV_ASYNC_WORKER_USERNAME='AsyncWorkerUser'
HWPV_ASYNC_WORKER_PASSWORD='Passw0rd!'

HWPV_EXT_WEB_USERNAME='ExtUser'
HWPV_EXT_WEB_PASSWORD='Passw0rd!'
HWPV_EXT_MIGRATION_USERNAME='ExtMigrationsUser'
HWPV_EXT_MIGRATION_PASSWORD='Passw0rd!'

HWPV_INT_WEB_USERNAME='IntUser'
HWPV_INT_WEB_PASSWORD='Passw0rd!'
HWPV_INT_MIGRATION_USERNAME='IntMigrationsUser'
HWPV_INT_MIGRATION_PASSWORD='Passw0rd!'
```

## Create MSSQL instance with Docker Compose

```
docker-compose up
```

## Install the node modules (tested on node 16/npm 7)

```
npm install
```

## Run

This will tear down the database setup but not remove the database. It will remove schemas, logins, users and tables by checking if they exist first. It will then recreate them all followed by running the external and internal migrations followed by creating the Stored Procedures in the `./seeds` folder.

```
npm start
```
