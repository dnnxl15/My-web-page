
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({ uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/project', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.post('/upload-image/:id', multipartyMiddleware, ProjectController.uploadImage);

module.exports = router;