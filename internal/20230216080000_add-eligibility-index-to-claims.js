exports.up = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.index([ 'EligibilityId' ], 'EligibilityId_Index')
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.table('Claim', function(table) {
        table.dropIndex([ 'EligibilityId' ], 'EligibilityId_Index')
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
