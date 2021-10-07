# Help with Prison Visits Database migrations

Contains the database scripts necessary to setup the MS SQL Database instance used for APVS (Assisted Prison Visit Scheme).

These are the helper scripts to setup and clear down the database. The main migration scripts necessary to setup the database schema live in the [help-with-prison-visits-external](https://github.com/ministryofjustice/help-with-prison-visits-external.git) and [help-with-prison-visits-internal](https://github.com/ministryofjustice/help-with-prison-visits-internal.git).

## Requires

* [node](https://nodejs.org)

## Run

Set environmental variables:

```
export HWPV_MIGRATIONS_USERNAME='USERNAME'
export HWPV_MIGRATIONS_PASSWORD='PASSWORD'
export HWPV_DATABASE='DATABASE'
export HWPV_DATABASE_SERVER='DATABASESERVER'

export HWPV_EXT_WEB_USERNAME='USERNAME'
export HWPV_EXT_WEB_PASSWORD='PASSWORD'

export HWPV_EXT_MIGRATION_USERNAME='USERNAME'
export HWPV_EXT_MIGRATION_PASSWORD='PASSWORD'

export HWPV_INT_WEB_USERNAME='USERNAME'
export HWPV_INT_WEB_PASSWORD='PASSWORD'

export HWPV_INT_MIGRATION_USERNAME='USERNAME'
export HWPV_INT_MIGRATION_PASSWORD='PASSWORD'

export HWPV_ASYNC_WORKER_USERNAME='USERNAME'
export HWPV_ASYNC_WORKER_PASSWORD='PASSWORD'

npm install

# ONLY NEEDS TO BE DONE ONCE PER DATABASE SERVER NOT DATABASE INSTANCE
node create-logins-on-master.js

node create-schemas-users.js

# Clear database
# node drop-schemas-users.js

# Delete knex migrations lock after failure
# node delete-migration-lock.js
```
