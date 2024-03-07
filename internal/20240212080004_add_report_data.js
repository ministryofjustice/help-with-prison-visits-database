exports.up = function (knex, Promise) {
  return knex.schema.createTable('ReportData', function (table) {
    table.integer('ReportId')
    table.string('Reference').notNullable()
    table.integer('ClaimId').notNullable()
    table.decimal('PaymentAmount')
    table.integer('Caseworker')
    table.string('Band5Username')
    table.string('Band5Validity')
    table.string('Band5Description')
    table.string('Band9Username')
    table.string('Band9Validity')
    table.string('Band9Description')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ReportData')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
