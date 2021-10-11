exports.up = function (knex, Promise) {
  return knex.schema.createTable('Task', function (table) {
    table.increments('TaskId')
    table.string('Task', 100).notNullable()
    table.string('Reference', 10) // No foreign key as task may remove records.
    table.string('Status', 20).notNullable()
    table.integer('EligibilityId') // No foreign key as task may remove records.
    table.integer('ClaimId') // No foreign key as task may remove records.
    table.dateTime('DateCreated').notNullable()
    table.dateTime('DateProcessed')
    table.text('AdditionalData')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Task')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
