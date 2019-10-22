const express = require('express')
const routes = require('./app/api/routes')
const morgan = require('./lib/morgan')
const app = express()

app.use(morgan)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

module.exports = app
