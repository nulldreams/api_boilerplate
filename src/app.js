const express = require('express')
const routes = require('./app/routes')
const bodyParser = require('body-parser')
const morgan = require('./lib/morgan')
const app = express()

app.use(morgan)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

module.exports = app
