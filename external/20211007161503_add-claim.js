exports.up = function (knex, Promise) {
  return knex.schema.createTable('Claim', function (table) {
    table.increments('ClaimId')
    table.integer('EligibilityId').unsigned().notNullable()
    table.string('Reference', 10).notNullable().index()
    table.string('AssistedDigitalCaseworker', 100)
    table.string('ClaimType', 50)
    table.string('Status', 20).notNullable()
    table.boolean('IsAdvanceClaim')
    table.dateTime('DateOfJourney').notNullable()
    table.dateTime('DateCreated').notNullable()
    table.dateTime('DateSubmitted')
    table.string('PaymentMethod', 10)
    table.index(['EligibilityId', 'ClaimId'])
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Claim')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
