exports.up = function (knex, Promise) {
  return knex.schema.createTable('ExtSchema.ClaimEscort', function (table) {
    table.increments('ClaimEscortId')
    table.integer('EligibilityId').unsigned().notNullable()
    table.string('Reference', 10).notNullable().index()
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('FirstName', 100).notNullable()
    table.string('LastName', 100).notNullable()
    table.dateTime('DateOfBirth').notNullable()
    table.boolean('IsEnabled')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ExtSchema.ClaimEscort')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
