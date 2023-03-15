const { Router } = require('express');
const cardCreate = require("../user/cardCreate");
const cardDelete = require("../user/cardDelete");
const cardGetAll = require("../user/cardGetAll");
const cardUpdateById = require("../user/cardUpdateById");

const router = Router();

router.get('/', cardGetAll);
router.delete('/:cardId', cardDelete);
router.post('/', cardCreate);
router.patch('/:cardId', cardUpdateById);

module.exports = router;