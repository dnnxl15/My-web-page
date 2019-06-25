
var express = require('express');
var ProjectrController = require('../controllers/project');

var router = express.Router();

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({ uploadDir: './uploads'});

router.get('/home', ProjectrController.home);
router.post('/test', ProjectrController.test);
router.post('/save-project', ProjectrController.saveProject);
router.get('/project/:id?', ProjectrController.getProject);
router.get('/project', ProjectrController.getProjects);
router.put('/project/:id', ProjectrController.updateProject);
router.post('/upload-image/:id', ProjectrController.uploadImage);

module.exports = router;