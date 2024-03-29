const express = require('express');
const {routes} = require('./modules/core/routes');
const bodyParser1 = require("./modules/core/bodyParser");
const dbConnection = require("./modules/core/dbConnection");
const cors = require("./modules/core/cors");

const app = express();

const PORT = 5000;

cors(app);
dbConnection();
bodyParser1(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;

//mongodb+srv://adpol95:MlWkg1a2F5o8FtCX@cluster0.izr2wlk.mongodb.net/kanban?retryWrites=true&w=majority