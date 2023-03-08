const express = require('express');
const routes = require('./routes');
const bodyParser1 = require("./bodyParser");
const app = express();
const PORT = 5000;

bodyParser1(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;
