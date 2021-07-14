const express = require('express');

const controller = require('../controllers/buscaupdate.js');

const router = express.Router();

router.post('/', controller.buscaUpdate);

module.exports = router;