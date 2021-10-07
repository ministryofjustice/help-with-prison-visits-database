exports.up = function (knex, Promise) {
  return knex.schema.createTable('AutoApproval', function (table) {
    table.integer('AutoApprovalId').unsigned().primary()
    table.integer('EligibilityId').unsigned()
    table.integer('ClaimId').unsigned().notNullable()
    table.integer('NumberOfConsecutiveAutoApprovals').defaultTo(4)
    table.string('Reference', 10).notNullable()
    table.string('EmailAddress', 100).notNullable()
    table.string('LastName', 100).notNullable()
    table.dateTime('DateAdded').notNullable()
    table.decimal('CostPerMile').defaultTo(0.13)
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('AutoApproval')
}
