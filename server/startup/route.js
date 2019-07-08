const express = require('express');
const auth = require('../routes/auth');
const project = require('../routes/project');
const user = require('../routes/users');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/auth', auth);
  app.use('/api/project', project);
  app.use('/api/user', user);
  app.use(error);
}