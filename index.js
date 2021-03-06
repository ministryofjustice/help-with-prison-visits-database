require('dotenv').config()
const config = require('./knexfile').development
const knex = require('knex')(config)
const { dropLoginsOnMaster, createLoginsOnMaster } = require('./setup/create-logins-on-master')
const { deleteMigrationLock } = require('./setup/delete-migration-lock')
const { dropSchemaUsers } = require('./setup/drop-schemas-users')
const { createSchemaUsers } = require('./setup/create-schemas-users')

dropLoginsOnMaster(knex)
    .then(() => {
        return createLoginsOnMaster(knex)
    })
    // .then(() => {
    //     return deleteMigrationLock(knex)
    // })
    .then(() => {
        return dropSchemaUsers(knex)
    })
    .then(() => {
        return createSchemaUsers(knex)
    })
    .then(() => {
      process.exit(0)
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
