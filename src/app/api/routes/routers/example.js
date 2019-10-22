const express = require('express')
const { example } = require('../../../modules/example/controller')

const router = express.Router()

router.get('/test', example)

module.exports = router
