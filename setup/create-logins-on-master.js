// Creates the external and internal database logins
// - Must be done on master DB in Azure SQL
// - Azure SQL does not allow switching by USE
// - ONLY NEEDS TO BE DONE ONCE PER DATABASE SERVER NOT DATABASE INSTANCE
// const config = require('../knexfile').development
// config.connection.database = 'master'
// const knex = require('knex')(config)

const createLoginsOnMaster = (knex) => {
  return knex.schema
    .raw('USE [master]')
    .raw('CREATE LOGIN ?? WITH Password=\'' + process.env.HWPV_EXT_WEB_PASSWORD + '\';', process.env.HWPV_EXT_WEB_USERNAME)
    .raw('CREATE LOGIN ?? WITH Password=\'' + process.env.HWPV_EXT_MIGRATION_PASSWORD + '\';', process.env.HWPV_EXT_MIGRATION_USERNAME)
    .raw('CREATE LOGIN ?? WITH Password=\'' + process.env.HWPV_INT_WEB_PASSWORD + '\';', process.env.HWPV_INT_WEB_USERNAME)
    .raw('CREATE LOGIN ?? WITH Password=\'' + process.env.HWPV_INT_MIGRATION_PASSWORD + '\';', process.env.HWPV_INT_MIGRATION_USERNAME)
    .raw('CREATE LOGIN ?? WITH Password=\'' + process.env.HWPV_ASYNC_WORKER_PASSWORD + '\';', process.env.HWPV_ASYNC_WORKER_USERNAME)
    // .then(function () {
    //   process.exit(0)
    // })
    // .catch(function (error) {
    //   console.log(error)
    //   process.exit(1)
    // })
}

module.exports = {
  createLoginsOnMaster,
}
