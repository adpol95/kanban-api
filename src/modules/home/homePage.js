function homePage(req, res) {
  res.status(200).json('Welcome to Kanban Server. You can made CRUD operations with it. Send requests with path /card');
}

module.exports = homePage;