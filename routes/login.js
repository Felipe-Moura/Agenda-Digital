const express = require('express');

const controller = require('../controllers/login.js');

const router = express.Router();

//Todas as rotas começam com /login
router.get('/', controller.getLogin);
router.post('/', controller.logar);

module.exports = router;