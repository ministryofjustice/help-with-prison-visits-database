// Creates the external and internal database logins
const dropLoginsOnMaster = (knex) => {
  return knex.schema
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
