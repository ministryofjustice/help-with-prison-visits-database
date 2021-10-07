exports.up = function (knex, Promise) {
  return knex.schema.table('Claim', function (table) {
    table.renameColumn('BankPaymentAmount', 'PaymentAmount')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('Claim', function (table) {
    table.renameColumn('PaymentAmount', 'BankPaymentAmount')
  })
}
