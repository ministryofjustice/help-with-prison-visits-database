exports.up = function (knex, Promise) {
  return knex.schema.createTable('AuditConfig', function (table) {
    table.increments('AuditConfigId')
    table.decimal('ThresholdAmount')
    table.integer('VerificationPercent')
    table.dateTime('DateCreated')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('AuditConfig')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
