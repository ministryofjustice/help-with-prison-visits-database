// Creates the external and internal database logins
// - Must be done on master DB in Azure SQL
// - Azure SQL does not allow switching by USE
// - ONLY NEEDS TO BE DONE ONCE PER DATABASE SERVER NOT DATABASE INSTANCE
// const config = require('../knexfile').development
// config.connection.database = 'master'
// const knex = require('knex')(config)
const dropLoginsOnMaster = (knex) => {
  return knex.schema
    // .raw('USE [master];')
    .raw(`IF EXISTS (SELECT name FROM [${process.env.HWPV_DATABASE}].sys.server_principals WHERE name = '${process.env.HWPV_EXT_WEB_USERNAME}')
      DROP LOGIN [${process.env.HWPV_EXT_WEB_USERNAME}];`)
    .raw(`IF EXISTS (SELECT name FROM [${process.env.HWPV_DATABASE}].sys.server_principals WHERE name = '${process.env.HWPV_EXT_MIGRATION_USERNAME}')
      DROP LOGIN [${process.env.HWPV_EXT_MIGRATION_USERNAME}];`)
    .raw(`IF EXISTS (SELECT name FROM [${process.env.HWPV_DATABASE}].sys.server_principals WHERE name = '${process.env.HWPV_INT_WEB_USERNAME}')
      DROP LOGIN [${process.env.HWPV_INT_WEB_USERNAME}];`)
    .raw(`IF EXISTS (SELECT name FROM [${process.env.HWPV_DATABASE}].sys.server_principals WHERE name = '${process.env.HWPV_INT_MIGRATION_USERNAME}')
      DROP LOGIN [${process.env.HWPV_INT_MIGRATION_USERNAME}];`)
    .raw(`IF EXISTS (SELECT name FROM [${process.env.HWPV_DATABASE}].sys.server_principals WHERE name = '${process.env.HWPV_ASYNC_WORKER_USERNAME}')
      DROP LOGIN [${process.env.HWPV_ASYNC_WORKER_USERNAME}];`)
}

const createLoginsOnMaster = (knex) => {
  return knex.schema
    // .raw('USE [master];')
    .raw(`CREATE LOGIN [${process.env.HWPV_EXT_WEB_USERNAME}] WITH Password='${process.env.HWPV_EXT_WEB_PASSWORD}';`)
    .raw(`CREATE LOGIN [${process.env.HWPV_EXT_MIGRATION_USERNAME}] WITH Password='${process.env.HWPV_EXT_MIGRATION_PASSWORD}';`)
    .raw(`CREATE LOGIN [${process.env.HWPV_INT_WEB_USERNAME}] WITH Password='${process.env.HWPV_INT_WEB_PASSWORD}';`)
    .raw(`CREATE LOGIN [${process.env.HWPV_INT_MIGRATION_USERNAME}] WITH Password='${process.env.HWPV_INT_MIGRATION_PASSWORD}';`)
    .raw(`CREATE LOGIN [${process.env.HWPV_ASYNC_WORKER_USERNAME}] WITH Password='${process.env.HWPV_ASYNC_WORKER_PASSWORD}';`)
}

module.exports = {
  dropLoginsOnMaster,
  createLoginsOnMaster,
}
