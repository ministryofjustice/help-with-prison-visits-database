exports.up = function (knex, Promise) {
  return knex.schema.createTable('AutoApproval', function (table) {
    table.increments('AutoApprovalId')
    table.integer('EligibilityId').unsigned()
    table.integer('ClaimId').unsigned().notNullable()
    table.string('Reference', 10).notNullable()
    table.string('EmailAddress', 100).notNullable()
    table.dateTime('DateAdded').notNullable()
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('AutoApproval')
}
