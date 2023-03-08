let cards = [
  {id: '1', name: 'First Cards', status: 'todo', priority: 2},
  {id: '2', name: 'Second Cards', status: 'progress', priority: 5},
  {id: '3', name: 'Next Cards', status: 'todo', priority: 3},
];

function routes(app) {
  app.get('/', (req, res) => {
    res.send(cards)
  })

  app.delete('/card/:cardId', (req, res) => {
    const id = req.params.cardId;
    cards = cards.filter(el => el.id !== id);
    res.send('Card deleted');
  })

  app.post('/card', (req, res) => {
    const card = req.body;
    cards.push({id: Math.floor(Math.random() * 100 + 1) + '', ...card});
    console.log(cards);
    res.send('Card created');
  })

  app.patch('/card/:cardId', (req, res) => {
    const id = req.params.cardId;
    cards = cards.map(el => el.id === id ? {id: el.id, ...req.body} : el);
    res.send('Card updated')
  })
}

module.exports = routes;