// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Deployment of Super App (Android )to Beta
// Rewrite Retailer Wallet Top Up Endpoint
// Add ID for wifi and retailer feature in. login endpoint  - done 
// Update Sales and notifcation History Endpoint  - done 

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, 
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}


module.exports = {

  development: {
    ...sharedConfig,
    connection: {
         filename: './data/testing.db3' ,
  },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  }
};

