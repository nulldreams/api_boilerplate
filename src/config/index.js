const dotenv = require('dotenv')
const envs = {
  development: '.development.env'
}
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config({ path: envs[process.env.NODE_ENV] })

if (!envFound) throw new Error('Couldn\'t find .env file')

module.exports = {
  port: process.env.PORT,
  mongo: {
    url: process.env.MONGO_URL
  },
  logs: {
    level: 'verbose'
  }
}
