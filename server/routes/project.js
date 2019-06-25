'use strict'

var express = require('express');
var ProjectrController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectrController.home);
router.get('/test', ProjectrController.test);

module.exports = router;