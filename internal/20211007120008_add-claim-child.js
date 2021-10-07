exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.ClaimChild', function (table) {
    table.integer('ClaimChildId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('Reference', 10).notNullable().index()
    table.string('FirstName', 50).notNullable()
    table.string('LastName', 50).notNullable()
    table.string('Relationship', 100).notNullable()
    table.dateTime('DateOfBirth').notNullable()
    table.boolean('IsEnabled')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.ClaimChild')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
