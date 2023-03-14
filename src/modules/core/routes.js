const cardCreate = require("../user/cardCreate");
const cardDelete = require("../user/cardDelete");
const cardGetAll = require("../user/cardGetAll");
const cardUpdateById = require("../user/cardUpdateById");
const express = require("express");

function routes(app) {
  app.use(express.static(__dirname));
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.get('/card', cardGetAll);
  app.delete('/card/:cardId', cardDelete);
  app.post('/card', cardCreate);
  app.patch('/card/:cardId', cardUpdateById);
}

module.exports = { routes };
