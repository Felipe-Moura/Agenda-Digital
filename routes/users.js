const express = require('express');

const controller = require('../controllers/users.js');

const router = express.Router();

// todas as rotas já começam com /users
router.get('/', controller.getUsers);

module.exports = router;