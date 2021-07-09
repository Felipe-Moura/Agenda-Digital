const express = require('express');

const controller = require('../controllers/users.js');

const router = express.Router();

// todas as rotas já começam com /users
router.get('/', controller.primeiraFuncao);

router.get('/cadastro', controller.getCadastro);

router.get('/update', controller.updateCadastro);

module.exports = router;