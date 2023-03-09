const user = require("./Model");

function cardDelete(req, res) {
  user
    .findByIdAndDelete(req.params.cardId)
    .then(() => res.status(200).json('Card deleted'))
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card delete error');
    })
}

module.exports = cardDelete;