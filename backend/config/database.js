module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME" ),
      user: env("DATABASE_USER" ),
      password: env("DATABASE_PASSWORD", ),
      schema: env("DATABASE_SCHEMA"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", true),
      },
    },
  }
});