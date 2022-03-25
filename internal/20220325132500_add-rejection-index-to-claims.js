exports.up = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.index([ 'RejectionReasonId' ])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.dropIndex([ 'RejectionReasonId' ])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
