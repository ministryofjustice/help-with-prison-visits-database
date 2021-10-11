exports.up = function (knex, Promise) {
  return knex.schema.createTable('Eligibility', function (table) {
    table.integer('EligibilityId').unsigned().primary().unique()
    table.integer('ReferenceDisabled').unsigned()
    table.string('Reference', 10).notNullable().index()
    table.string('UntrustedReason')
    table.string('Status', 20).notNullable()
    table.string('DisabledReason', 2000)
    table.string('ReEnabledReason', 2000)
    table.dateTime('UntrustedDate')
    table.dateTime('DateCreated').notNullable()
    table.dateTime('DateSubmitted')
    table.boolean('IsTrusted').defaultTo(true)
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Eligibility')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
