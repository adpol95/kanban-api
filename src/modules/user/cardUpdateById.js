const user = require('./Model')
function cardUpdateById(req, res) {
  user
    .findByIdAndUpdate(req.params.cardId, req.body)
    .exec()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card update error');
    })
}

module.exports = cardUpdateById;