const express = require('express');

const controller = require('../controllers/home.js');

const router = express.Router();

router.get('/', controller.primeiraFuncao);

module.exports = router;