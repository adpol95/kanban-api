function cardUpdateById(req, res) {
  // const id = req.params.cardId;
  // cards = cards.map(el => el.id === id ? {id: el.id, ...req.body} : el);
  res.status(200).json('Card updated')
}

module.exports = cardUpdateById;