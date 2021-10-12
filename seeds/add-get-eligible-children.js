require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS getEligibleChildren')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION getEligibleChildren(@reference varchar(7), @eligibiltyId int)
          RETURNS TABLE
          AS
          RETURN
          (
            SELECT
              EligibleChild.EligibleChildId
            FROM EligibleChild AS EligibleChild
            WHERE
              EligibleChild.EligibilityId = @eligibiltyId AND
              EligibleChild.Reference = @reference
            UNION ALL
            SELECT
              EligibleChild.EligibleChildId
            FROM ExtSchema.EligibleChild AS EligibleChild
            WHERE
              EligibleChild.EligibilityId = @eligibiltyId AND
              EligibleChild.Reference = @reference
          )
          `
        )
        .raw('GRANT SELECT ON getEligibleChildren TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
