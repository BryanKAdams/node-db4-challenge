// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "recipes",
      user: "postgres",
      password: "Sarahbear9$"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      tableName: "knex_seeds",
      directory: "./data/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "recipes",
      user: "postgres",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      tableName: "knex_seeds",
      directory: "./data/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
