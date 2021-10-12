require('dotenv').config()

/**
 * Adds a table function to the IntSchema that retrieves the last approved Claim Child data for the given reference
 * number and eligibilityId or by claimId and grants the external web user permissions to call it.
 */
exports.seed = function (knex, Promise) {
  return knex.schema
    .raw('DROP FUNCTION IF EXISTS checkForDisabledReference')
    .then(function () {
      return knex.schema
        .raw(
          `
          CREATE FUNCTION checkForDisabledReference(@reference varchar(7))
          RETURNS TABLE
          AS
          RETURN
          (
            SELECT
              TOP (1) ReferenceDisabled
            FROM Eligibility AS Eligibility
            WHERE
              Reference = @reference AND
              ReferenceDisabled = 1
          )
          `
        )
        .raw('GRANT SELECT ON checkForDisabledReference TO ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    })
    .catch(function (error) {
      console.log(error)
      throw error
    })
}
