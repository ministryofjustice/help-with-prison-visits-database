exports.up = function (knex, Promise) {
  return knex.schema.createTable('TopUp', function (table) {
    table.increments('TopUpId')
    table.integer('ClaimId').unsigned().notNullable().references('Claim.ClaimId')
    table.string('PaymentStatus', 100).notNullable()
    table.string('Caseworker', 100).notNullable()
    table.string('Reason', 2000).notNullable()
    table.decimal('TopUpAmount').notNullable()
    table.dateTime('DateAdded')
    table.dateTime('PaymentDate')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('TopUp')
}
