const express = require('express');

const controller = require('../controllers/registro.js');

const router = express.Router();

//Todas as rotas começam com /registro
router.get('/', controller.getRegistro);
router.post('/', controller.registrar);

module.exports = router;