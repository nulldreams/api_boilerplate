const router = {
  example: require('./routers/example')
}

module.exports = (app) => {
  app.use('/example', router.example)
}
