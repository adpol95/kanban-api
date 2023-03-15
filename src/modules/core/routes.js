const cardRouter = require('../user/Router');
const homeRouter = require('../home/Router');
function routes(app) {
  app.use('/', homeRouter);
  app.use('/card', cardRouter);
}

module.exports = { routes };
