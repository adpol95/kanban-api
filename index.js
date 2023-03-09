const express = require('express');
const routes = require('./routes');
const bodyParser1 = require("./bodyParser");
const dbConnection = require("./dbConnection");
const app = express();
const PORT = 5000;

dbConnection();
bodyParser1(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;

//mongodb+srv://adpol95:MlWkg1a2F5o8FtCX@cluster0.izr2wlk.mongodb.net/kanban?retryWrites=true&w=majority