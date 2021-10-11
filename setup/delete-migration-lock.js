const deleteMigrationLock = (knex) => {
  return knex.schema
    .raw('DELETE FROM ExtSchema.knex_ext_migrations_lock;')
    .raw('DELETE FROM IntSchema.knex_int_migrations_lock;')
}

module.exports = {
  deleteMigrationLock,
}
