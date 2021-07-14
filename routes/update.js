const express = require('express');

const controller = require('../controllers/update.js');

const router = express.Router();

router.get('/', controller.getUpdateCadastro);
router.post('/', controller.atualizando);

module.exports = router;