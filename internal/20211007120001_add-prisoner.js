exports.up = function (knex, Promise) {
  return knex.schema.createTable('Prisoner', function (table) {
    table.integer('PrisonerId').unsigned().primary()
    table.integer('EligibilityId').unsigned().notNullable().references('Eligibility.EligibilityId')
    table.string('Reference', 10).notNullable().index()
    table.string('FirstName', 100).notNullable()
    table.string('LastName', 100).notNullable()
    table.string('PrisonNumber', 10).notNullable()
    table.string('NameOfPrison', 100).notNullable()
    table.string('NomisCheck', 20)
    table.boolean('ReleaseDateIsSet')
    table.dateTime('DateOfBirth').notNullable()
    table.dateTime('ReleaseDate')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Prisoner')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
