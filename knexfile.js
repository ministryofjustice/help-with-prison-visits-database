require('dotenv').config()

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: process.env.HWPV_DATABASE_SERVER,
      user: process.env.HWPV_INT_WEB_USERNAME,
      password: process.env.HWPV_INT_WEB_PASSWORD,
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
  },

  migrations: {
    client: 'mssql',
    connection: {
      host: process.env.HWPV_DATABASE_SERVER,
      user: process.env.HWPV_INT_WEB_USERNAME,
      password: process.env.HWPV_INT_WEB_PASSWORD,
      database: process.env.HWPV_DATABASE,
      options: {
        encrypt: false,
        enableArithAbort: true
      }
    },
    migrations: {
      tableName: 'knex_int_migrations'
    }
    // , debug: true // Uncomment to see knex generated SQL
  }
}
