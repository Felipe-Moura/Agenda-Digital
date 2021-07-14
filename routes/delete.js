const express = require('express');

const controller = require('../controllers/delete.js');

const router = express.Router();

router.get('/', controller.getDeletarContato);
router.post('/', controller.deletar);

module.exports = router;