const cardCreate = require("../user/cardCreate");
const cardDelete = require("../../../card/cardDelete");
const cardGetAll = require("../user/cardGetAll");
const cardUpdateById = require("../../../card/cardUpdateById");

function routes(app) {
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })
  app.get('/card', cardGetAll);
  app.delete('/card/:cardId', cardDelete);
  app.post('/card', cardCreate);
  app.patch('/card/:cardId', cardUpdateById);
}

module.exports = { routes };
