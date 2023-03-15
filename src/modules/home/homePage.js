function homePage(req, res) {
  res.status(200).json('Welcome to Kanban Server');
}

module.exports = homePage;