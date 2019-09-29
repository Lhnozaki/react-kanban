// Update with your config settings.

const path = require("path");
require("dotenv").config();

module.exports = {
  client: "postgresql",
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.join(__dirname, "database", "migrations")
  },
  seeds: {
    directory: path.join(__dirname, "database", "seeds")
  }
};
