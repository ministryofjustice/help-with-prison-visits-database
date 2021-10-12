require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS getIdsForVisitorPrisonerCheck')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION getIdsForVisitorPrisonerCheck
          (
              @dateOfJourney varchar(10)
          )
          RETURNS TABLE
          AS
          RETURN
          (
              SELECT DISTINCT EligibilityId
              FROM Claim
              WHERE DateOfJourney = @dateOfJourney
          )
          `
        )
        .raw('GRANT SELECT ON getIdsForVisitorPrisonerCheck TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
