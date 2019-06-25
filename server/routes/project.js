
var express = require('express');
var ProjectrController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectrController.home);
router.post('/test', ProjectrController.test);
router.post('/save-project', ProjectrController.saveProject);
router.get('/project/:id?', ProjectrController.getProject);
router.get('/project', ProjectrController.getProjects);
router.put('/project/:id', ProjectrController.updateProject);

module.exports = router;