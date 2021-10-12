exports.up = function (knex, Promise) {
  return knex.schema.createTable('ClaimBankDetail', function (table) {
    table.integer('ClaimBankDetailId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('Reference', 10).notNullable().index()
    table.string('AccountNumber', 8)
    table.string('SortCode', 6)
    table.string('NameOnAccount', 100).notNullable()
    table.string('RollNumber', 30)
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ClaimBankDetail')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
