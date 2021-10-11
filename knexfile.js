require('dotenv').config()

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: process.env.HWPV_DATABASE_SERVER,
      user: 'sa',
      password: 'mssqlPassw0rd!',
      database: process.env.HWPV_DATABASE,
      options: {
        encrypt: false,
        enableArithAbort: true
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    acquireConnectionTimeout: 500000
    // , debug: true // Uncomment to see knex generated SQL
  },

  intMigrations: {
    client: 'mssql',
    connection: {
      host: process.env.HWPV_DATABASE_SERVER,
      user: process.env.HWPV_INT_MIGRATION_USERNAME,
      password: process.env.HWPV_INT_MIGRATION_PASSWORD,
      database: process.env.HWPV_DATABASE,
      options: {
        encrypt: false,
        enableArithAbort: true
      }
    },
    migrations: {
      tableName: 'knex_int_migrations',
      directory: './internal'
    }
    // , debug: true // Uncomment to see knex generated SQL
  },

  extMigrations: {
    client: 'mssql',
    connection: {
      host: process.env.HWPV_DATABASE_SERVER,
      user: process.env.HWPV_EXT_MIGRATION_USERNAME,
      password: process.env.HWPV_EXT_MIGRATION_PASSWORD,
      database: process.env.HWPV_DATABASE,
      options: {
        encrypt: false,
        enableArithAbort: true
      }
    },
    migrations: {
      tableName: 'knex_ext_migrations',
      directory: './external'
    }
    , debug: true // Uncomment to see knex generated SQL
  }
}
