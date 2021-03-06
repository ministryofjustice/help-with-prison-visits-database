const createSchemaUsers = (knex) => {
  return knex.schema

    // Create Schemas
    .raw('CREATE SCHEMA ExtSchema;')
    .raw('CREATE SCHEMA IntSchema;')

    // Create Users
    .raw('CREATE USER ??;', [process.env.HWPV_EXT_WEB_USERNAME])
    .raw('CREATE USER ??;', [process.env.HWPV_EXT_MIGRATION_USERNAME])
    .raw('CREATE USER ??;', [process.env.HWPV_INT_WEB_USERNAME])
    .raw('CREATE USER ??;', [process.env.HWPV_INT_MIGRATION_USERNAME])
    .raw('CREATE USER ??;', [process.env.HWPV_ASYNC_WORKER_USERNAME])

    // Create Roles:

    // External Web
    .raw('CREATE ROLE ExtSchemaReadWrite;')
    .raw('GRANT SELECT ON SCHEMA::ExtSchema TO ExtSchemaReadWrite;')
    .raw('GRANT INSERT ON SCHEMA::ExtSchema TO ExtSchemaReadWrite;')
    .raw('GRANT UPDATE ON SCHEMA::ExtSchema TO ExtSchemaReadWrite;')

    // Internal Web
    .raw('CREATE ROLE IntSchemaReadWrite;')
    .raw('GRANT SELECT ON SCHEMA::IntSchema TO IntSchemaReadWrite;')
    .raw('GRANT INSERT ON SCHEMA::IntSchema TO IntSchemaReadWrite;')
    .raw('GRANT UPDATE ON SCHEMA::IntSchema TO IntSchemaReadWrite;')

  // Set User Permissions:

    // External Web (internal database permissions required for performing table queries)
    .raw('ALTER USER ?? WITH DEFAULT_SCHEMA = ExtSchema;', [process.env.HWPV_EXT_WEB_USERNAME])
    .raw('ALTER ROLE ExtSchemaReadWrite ADD MEMBER ??;', [process.env.HWPV_EXT_WEB_USERNAME])

    // External Migration
    .raw('ALTER USER ?? WITH DEFAULT_SCHEMA = ExtSchema;', [process.env.HWPV_EXT_MIGRATION_USERNAME])
    .raw('ALTER ROLE db_owner ADD MEMBER ??;', [process.env.HWPV_EXT_MIGRATION_USERNAME])

    // Internal Web
    .raw('ALTER USER ?? WITH DEFAULT_SCHEMA = IntSchema;', [process.env.HWPV_INT_WEB_USERNAME])
    .raw('ALTER ROLE IntSchemaReadWrite ADD MEMBER ??;', [process.env.HWPV_INT_WEB_USERNAME])

    // Internal Migration
    .raw('ALTER USER ?? WITH DEFAULT_SCHEMA = IntSchema;', [process.env.HWPV_INT_MIGRATION_USERNAME])
    .raw('ALTER ROLE db_owner ADD MEMBER ??;', [process.env.HWPV_INT_MIGRATION_USERNAME])

    // Asynchronous Worker
    .raw('ALTER ROLE db_datawriter ADD MEMBER ??;', [process.env.HWPV_ASYNC_WORKER_USERNAME])
    .raw('ALTER ROLE db_datareader ADD MEMBER ??;', [process.env.HWPV_ASYNC_WORKER_USERNAME])
}

module.exports = {
  createSchemaUsers,
}
