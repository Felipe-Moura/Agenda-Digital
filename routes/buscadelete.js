const express = require('express');

const controller = require('../controllers/buscadelete.js');

const router = express.Router();

router.post('/', controller.buscaDelete);

module.exports = router;