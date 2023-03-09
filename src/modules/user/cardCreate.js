const User = require('./Model');
function cardCreate(req, res) {
    const userN = new User({
        name: req.body.name,
        email: req.body.email
    });

    userN
      .save()
      .then(() => res.status(200).json('Card created'))
      .catch((err) => {
          console.log(err);
          res.status(400).json('Error')
      })
}

module.exports = cardCreate;