exports.up = function (knex, Promise) {
  return knex.schema.createTable('AutoApprovalConfig', function (table) {
    table.increments('AutoApprovalConfigId')
    table.integer('MaxDaysAfterAPVUVisit')
    table.integer('MaxNumberOfClaimsPerYear')
    table.integer('MaxNumberOfClaimsPerMonth')
    table.string('Caseworker', 100)
    table.string('RulesDisabled', 4000)
    table.dateTime('DateCreated')
    table.decimal('CostVariancePercentage')
    table.decimal('MaxClaimTotal')
    table.boolean('AutoApprovalEnabled')
    table.boolean('IsEnabled')
    table.integer('NumberOfConsecutiveAutoApprovals')
    table.decimal('CostPerMile')
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex('AutoApprovalConfig')
    .del()
    .then(function () {
      return knex.schema.dropTable('AutoApprovalConfig')
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
