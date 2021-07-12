const express = require('express');

const controller = require('../controllers/users.js');

const router = express.Router();

// todas as rotas já começam com /users
router.get('/', controller.getUsers);

router.get('/cadastro', controller.getCadastro);
router.post('/cadastro', controller.cadastrando);

router.get('/update', controller.getUpdateCadastro);
router.post('/update', controller.atualizando);
router.post('/update/busca', controller.buscaUpdate);

router.get('/delete', controller.getDeletarContato);
router.post('/delete', controller.deletar);
router.post('/delete/busca', controller.buscaDelete);

module.exports = router;