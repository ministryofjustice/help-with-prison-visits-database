exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.ClaimExpense', function (table) {
    table.integer('ClaimExpenseId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.integer('DurationOfTravel')
    table.decimal('Cost').notNullable()
    table.decimal('ApprovedCost')
    table.decimal('Distance')
    table.string('Reference', 10).notNullable().index()
    table.string('ExpenseType', 100).notNullable()
    table.string('TravelTime', 100)
    table.string('From', 100)
    table.string('To', 100)
    table.string('TicketType', 100)
    table.string('TicketOwner', 10)
    table.string('ReturnTime', 100)
    table.string('Status', 20)
    table.string('FromPostCode', 10)
    table.string('ToPostCode', 10)
    table.boolean('IsReturn')
    table.boolean('IsEnabled')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.ClaimExpense')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
