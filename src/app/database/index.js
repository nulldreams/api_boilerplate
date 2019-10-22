const mongoose = require('mongoose')

module.exports.connect = ({ stringConnection }) => mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true })
