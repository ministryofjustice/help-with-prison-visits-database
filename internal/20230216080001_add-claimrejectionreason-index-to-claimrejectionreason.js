exports.up = function(knex, Promise) {
    return knex.schema.table('ClaimRejectionReason', function(table) {
        table.index([ 'ClaimRejectionReasonId' ], 'ClaimRejectionReasonId_Index')
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.table('ClClaimRejectionReasonaim', function(table) {
        table.dropIndex([ 'ClaimRejectionReasonId' ], 'ClaimRejectionReasonId_Index')
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
