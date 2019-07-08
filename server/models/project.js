const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },
    category: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },
    year: Number,
    langs: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
      },
    image: String,
    userCreated: {type: mongoose.Schema.Types.ObjectId}
});

const Project = mongoose.model('Project', projectSchema);

function validateProject(project) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(255).required(),
    category: Joi.string().min(2).max(255).required(),
    year: Joi.Number().min(5).max(255).required(),
    langs: Joi.string().min(2).max(50).required(),
    userCreate: Joi.string().min(5).max(255).required(),
};
  return Joi.validate(project, schema);
}

exports.Project = Project; 
exports.validate = validateProject;