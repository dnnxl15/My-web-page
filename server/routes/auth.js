'use strict'

var express = require('express');
var AuthController = require('../controllers/auth');
var router = express.Router();

router.post('/', AuthController.authUser);

module.exports = router;