exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.ClaimExpense', function (table) {
    table.integer('ClaimExpenseId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.string('Reference', 10).notNullable().index()
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('ExpenseType', 100).notNullable()
    table.decimal('Cost').notNullable()
    table.string('TravelTime', 100)
    table.string('From', 100)
    table.string('To', 100)
    table.boolean('IsReturn')
    table.integer('DurationOfTravel')
    table.string('TicketType', 100)
    table.string('TicketOwner', 10)
    table.boolean('IsEnabled')
    table.decimal('ApprovedCost')
    table.string('ReturnTime', 100)
    table.string('Status', 20)
    table.string('FromPostCode', 10)
    table.string('ToPostCode', 10)
    table.decimal('Distance')
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
