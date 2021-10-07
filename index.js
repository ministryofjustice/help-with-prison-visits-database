require('dotenv').config()
const config = require('../knexfile').development
// config.connection.database = 'master'
const knex = require('knex')(config)
const { dropSchemaUsers } = require('./setup/drop-schemas-users')
const { createSchemaUsers } = require('./setup/create-schemas-users')
const { createLoginsOnMaster } = require('./setup/create-logins-on-master')
const { deleteMigrationLock } = require('./setup/delete-migration-lock')
