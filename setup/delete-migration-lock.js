const deleteMigrationLock = (knex) => {
  knex.schema
    .raw('DELETE FROM ExtSchema.knex_ext_migrations_lock;')
    .raw('DELETE FROM IntSchema.knex_int_migrations_lock;')
    .then(function () {
      process.exit(0)
    })
    .catch(function (error) {
      console.log(error)
      process.exit(1)
    })
  }

  module.exports = {
    deleteMigrationLock,
  }
