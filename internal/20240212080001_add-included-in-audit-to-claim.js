exports.up = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.boolean('IsIncludedInAudit');
      })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.dropColumn('IsIncludedInAudit');
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
