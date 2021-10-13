exports.up = function (knex, Promise) {
  return knex('ClaimRejectionReason')
    .insert([
        {
            RejectionReason: 'Information needed not received within 6 weeks of the claim being submitted/request being sent. Do not have proof of visit/tickets',
            IsEnabled: true
        },
        {
            RejectionReason: 'Rejected as per your request',
            IsEnabled: true
        },
        {
            RejectionReason: 'Advance visit date passed/insufficient time to get advance payment out',
            IsEnabled: true
        },
        {
            RejectionReason: 'Advance visit not booked',
            IsEnabled: true
        },
        {
            RejectionReason: 'Duplicate claim',
            IsEnabled: true
        },
        {
            RejectionReason: 'Duplicate applicant (has two reference numbers)',
            IsEnabled: true
        },
        {
            RejectionReason: 'Exceeds entitlement',
            IsEnabled: true
        },
        {
            RejectionReason: 'Not in receipt of qualifying benefit/no benefit proof',
            IsEnabled: true
        },
        {
            RejectionReason: 'Visit used to offset a previous overpayment/outstanding visit',
            IsEnabled: true
        },
        {
            RejectionReason: 'You are not sole visitor / next of kin',
            IsEnabled: true
        },
        {
            RejectionReason: 'Incorrect data (e.g. address/prison number) entered',
            IsEnabled: true
        },
        {
            RejectionReason: 'Claim was submitted over 28 days after the visit',
            IsEnabled: true
        },
        {
            RejectionReason: 'Other',
            IsEnabled: true
        }
    ])
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

exports.down = function (knex, Promise) {
  return knex('ClaimRejectionReason').del()
}
