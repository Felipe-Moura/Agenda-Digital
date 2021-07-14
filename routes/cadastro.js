const express = require('express');

const controller = require('../controllers/cadastro.js');

const router = express.Router();

// todas as rotas já começam com /cadastro
router.get('/', controller.getCadastro);
router.post('/', controller.cadastrando);

module.exports = router;