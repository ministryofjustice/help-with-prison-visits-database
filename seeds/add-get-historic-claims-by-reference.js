require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS getHistoricClaimsByReference')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION getHistoricClaimsByReference(@reference varchar(7))
          RETURNS TABLE
          AS
          RETURN
          (
            SELECT
              Claim.ClaimId,
              Claim.DateOfJourney,
              Claim.Status,
              Claim.EligibilityId,
              Visitor.DateOfBirth,
              Prisoner.FirstName,
              Prisoner.LastName,
              Prisoner.NameOfPrison,
              Prisoner.PrisonNumber,
              Visitor.DWPCheck AS BenefitStatus,
              Claim.VisitConfirmationCheck,
              Claim.IsAdvanceClaim,
              Prisoner.NomisCheck,
              Claim.DateSubmitted
            FROM Claim AS Claim
              JOIN Visitor AS Visitor ON Visitor.EligibilityId = Claim.EligibilityId
              JOIN Prisoner AS Prisoner ON Prisoner.EligibilityId = Claim.EligibilityId
            WHERE
              Claim.Reference = @reference
          )
          `
        )
        .raw('GRANT SELECT ON getHistoricClaimsByReference TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
