exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.ClaimBankDetail', function (table) {
    table.integer('ClaimBankDetailId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('Reference', 10).notNullable().index()
    table.string('AccountNumber', 8)
    table.string('SortCode', 6)
    table.string('NameOnAccount', 100).notNullable()
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.ClaimBankDetail')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
