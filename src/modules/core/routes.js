const cardRouter = require('../user/Router')
function routes(app) {
  app.use('/card', cardRouter)
}

module.exports = { routes };
