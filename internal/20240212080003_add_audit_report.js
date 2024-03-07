exports.up = function (knex, Promise) {
  return knex.schema.createTable('AuditReport', function (table) {
    table.increments('ReportId')
    table.dateTime('StartDate').notNullable()
    table.dateTime('EndDate').notNullable()
    table.string('CheckStatus')
    table.string('VerificationStatus')
    table.string('FinalStatus')
    table.boolean('IsDeleted')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('AuditReport')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
