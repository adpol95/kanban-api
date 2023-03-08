const express = require('express');
const routes = require('./routes');
const bodyParser1 = require("./bodyParser");
const app = express();
const PORT = process.env.PORT || 3000;

bodyParser1(app);
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;
