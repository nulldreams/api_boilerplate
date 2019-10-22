const service = require('./service')

const example = (req, res) => {
  res.status(200).send({ success: service.sendExample })
}

module.exports = {
  example
}
