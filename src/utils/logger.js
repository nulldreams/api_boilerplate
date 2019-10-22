const winston = require('winston')
const config = require('../config')

const transports = []
if (process.env.NODE_ENV !== 'development') {
  transports.push(
    new winston.transports.Console()
  )
} else {
  transports.push(
    new winston.transports.Console()
  )
}

const alignedWithColorsAndTime = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf((info) => {
    const {
      timestamp, level, message, ...args
    } = info

    const ts = timestamp.slice(0, 19).replace('T', ' ')
    return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`
  })
)

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: alignedWithColorsAndTime,
  transports
})

module.exports = LoggerInstance
