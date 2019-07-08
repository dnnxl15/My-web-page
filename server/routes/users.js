
var express = require('express');
const UserController = require('../controllers/user');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/save-user', UserController.saveUser);
router.get('/user/:id?',  auth, UserController.getUser);
router.get('/',  [auth, admin], UserController.getUsers);
router.put('/:id',  auth, UserController.updateUser);
router.delete('/:id',  auth, UserController.deleteUser);

module.exports = router;