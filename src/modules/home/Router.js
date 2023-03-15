const { Router } = require('express');
const homePage = require('./homePage');
const router = Router();

router.get('/', homePage)

module.exports = router;