exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.ClaimDeduction', function (table) {
    table.increments('ClaimDeductionId')
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('Reference', 10).notNullable().index()
    table.string('DeductionType', 100).notNullable()
    table.decimal('Amount').notNullable()
    table.boolean('IsEnabled')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.ClaimDeduction')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}