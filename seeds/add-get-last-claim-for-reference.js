require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS getLastClaimForReference')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION getLastClaimForReference(@reference varchar(7), @eligibiltyId int)
          RETURNS TABLE
          AS
          RETURN
          (
            SELECT TOP (1) ClaimId, IsAdvanceClaim
              FROM Claim AS CLAIM
              WHERE 
              Claim.Reference = @reference AND
              Claim.EligibilityId = @eligibiltyId AND
              Claim.Status = 'APPROVED'
              ORDER BY DateSubmitted DESC
          )
          `
        )
        .raw('GRANT SELECT ON getLastClaimForReference TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
