exports.up = function (knex, Promise) {
  return knex.schema.createTable('IntSchema.Claim', function (table) {
    table.integer('ClaimId').unsigned().primary().unique()
    table.integer('EligibilityId').unsigned().notNullable() // NO FOREIGN KEY FOR REPEAT CLAIMS WHEN NO ELIGIBILITY IN EXTSCHEMA
    table.string('Reference', 10).notNullable().index() // NO FOREIGN KEY FOR REPEAT CLAIMS WHEN NO ELIGIBILITY IN EXTSCHEMA
    table.string('VisitConfirmationCheck', 20)
    table.string('AssistedDigitalCaseworker', 100)
    table.string('Caseworker', 100)
    table.string('PaymentStatus', 20)
    table.string('Status', 30).notNullable()
    table.string('Reason', 100)
    table.string('Note', 250)
    table.string('ClaimType', 50)
    table.boolean('IsAdvanceClaim')
    table.decimal('PaymentAmount')
    table.decimal('TotalAmount')
    table.decimal('ManuallyProcessedAmount')
    table.boolean('IsOverpaid')
    table.decimal('OverpaymentAmount')
    table.decimal('RemainingOverpaymentAmount')
    table.string('OverpaymentReason', 250)
    table.dateTime('DateOfJourney').notNullable()
    table.dateTime('DateCreated').notNullable()
    table.dateTime('DateSubmitted')
    table.dateTime('DateReviewed')
    table.timestamp('LastUpdated').defaultTo(knex.fn.now())
    table.dateTime('PaymentDate')
    table.dateTime('DateApproved')
    table.integer('RejectionReasonId').unsigned()
    table.string('AssignedTo', 100)
    table.dateTime('AssignmentExpiry')
    table.string('PaymentMethod', 10)
    table.index(['EligibilityId', 'ClaimId'])
  })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('IntSchema.Claim')
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
