
var express = require('express');
var ProjectController = require('../controllers/project');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
var router = express.Router();

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({ uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project',  auth, ProjectController.saveProject);
router.get('/project/:id?',  auth, ProjectController.getProject);
router.get('/project',  [auth, admin], ProjectController.getProjects);
router.put('/project/:id',  auth, ProjectController.updateProject);
router.post('/upload-image/:id',  auth, multipartyMiddleware, ProjectController.uploadImage);

module.exports = router;