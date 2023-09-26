// const knex = require('knex')
// const knexfile = require('../knexfile.js')
// const environment = process.env.NODE_ENV || 'development'
// const configOptions = knexfile[environment];

// module.exports = knex(configs[configOptions])


const knex = require('knex')
const knexfile = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'
const configOptions = knexfile[environment];

module.exports = knex(configOptions);
