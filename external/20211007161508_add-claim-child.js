exports.up = function (knex, Promise) {
  return knex.schema.createTable('ExtSchema.ClaimChild', function (table) {
    table.increments('ClaimChildId')
    table.integer('EligibilityId').unsigned().notNullable()
    table.string('Reference', 10).notNullable().index()
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('FirstName', 50).notNullable()
    table.string('LastName', 50).notNullable()
    table.dateTime('DateOfBirth').notNullable()
    table.string('Relationship', 100).notNullable()
    table.boolean('IsEnabled')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ExtSchema.ClaimChild')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
