exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.Eligibility', function (table) {
    table.integer('EligibilityId').unsigned().primary().unique()
    table.string('Reference', 10).notNullable().index()
    table.boolean('IsTrusted').defaultTo(true)
    table.string('UntrustedReason')
    table.dateTime('UntrustedDate')
    table.dateTime('DateCreated').notNullable()
    table.dateTime('DateSubmitted')
    table.string('Status', 20).notNullable()
    table.integer('ReferenceDisabled').unsigned()
    table.string('DisabledReason', 2000)
    table.string('ReEnabledReason', 2000)
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.Eligibility')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
