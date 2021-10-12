require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS getHistoricClaimIds')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION getHistoricClaimIds(@reference varchar(7), @dob datetime)
          RETURNS TABLE
          AS
          RETURN
          (
            SELECT
              Claim.ClaimId,
              Claim.DateSubmitted
            FROM Claim AS Claim
              JOIN Visitor AS Visitor ON Visitor.EligibilityId = Claim.EligibilityId
              JOIN Prisoner AS Prisoner ON Prisoner.EligibilityId = Claim.EligibilityId
              JOIN Eligibility AS Eligibility ON Eligibility.EligibilityId = Claim.EligibilityId
            WHERE
              Claim.Reference = @reference AND
              Visitor.DateOfBirth = @dob AND
              Visitor.DateOfBirth = 
               (
                 SELECT TOP (1) LatestVisitor.DateOfBirth 
                 FROM Visitor AS LatestVisitor 
                 WHERE LatestVisitor.Reference = @reference 
                 ORDER BY LatestVisitor.VisitorId DESC
               )
               AND 
               (
                 Eligibility.ReferenceDisabled IS NULL 
                 OR 
                 Eligibility.ReferenceDisabled = 0
               )
          )
          `
        )
        .raw('GRANT SELECT ON getHistoricClaimIds TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
