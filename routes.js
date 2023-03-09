const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateById = require("./card/cardUpdateById");
// let cards = [
//   {id: '1', name: 'First Cards', status: 'toddo', priority: 2},
//   {id: '2', name: 'Second Cards', status: 'progress', priority: 5},
//   {id: '3', name: 'Next Cards', status: 'toddo', priority: 3},
// ];

function routes(app) {
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })
  app.get('/card', cardGetAll);
  app.delete('/card/:cardId', cardDelete);
  app.post('/card', cardCreate);
  app.patch('/card/:cardId', cardUpdateById);
}

module.exports = routes;