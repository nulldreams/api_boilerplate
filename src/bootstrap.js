const logger = require('./utils/logger')
const mongodb = require('./app/database')
const app = require('./app.js')
const config = require('./config')

const main = async () => {
  await mongodb.connect({ stringConnection: config.mongo.url })
  logger.info('banco conectado')

  app.listen(config.port, () => {
    logger.info(`server up at http://localhost:${config.port}`)
  })
}

main()
