const express = require('express');

const controller = require('../controllers/registro.js');

const router = express.Router();

router.get('/', controller.primeiraFuncao);

module.exports = router;