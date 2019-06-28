
var Project = require('../models/project');
var fs = require('fs');

var controller =
{
    home: function(req, res)
    {
        return res.status(200).send({
            message: 'I am home'
        });
    },

    test: function(req, res)
    {
        return res.status(200).send({
            message: 'I am method or action test of the controller'
        });
    },

    saveProject: function(req, res)
    {
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) =>
        {
            if(err) return res.status(500).send({message: "Error to save the document"});

            if(!projectStored) return res.status(404).send({message: 'Couldnt save the file'});

            return res.status(200).send({project: projectStored});
        });
    },

    getProject: function(req, res)
    {
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'The project doesnt exists'});

        Project.findById(projectId, (err, project) => {

            if(err) return res.status(500).send({message: "Error to get the document"});

            if(!projectStored) return res.status(404).send({message: 'Couldnt find the file'});

            return res.status(200).send({project});
        });
    },

    getProjects: function(req, res)
    {
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'The project doesnt exists'});

        Project.find({}).sort('year').exe((err, project) => {

            if(err) return res.status(500).send({message: "Error to get the documents"});

            if(!projectStored) return res.status(404).send({message: 'Couldnt find the file'});

            return res.status(200).send({project});
        });
    },

    updateProject: function(req, res)
    {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, (err, projectUpdate) => {
            if(err) return res.status(500).send({message: "Error to update the documents"});

            if(!projectUpdate) return res.status(404).send({message: 'Couldnt update the file'});

            return res.status(200).send({project: projectUpdate});
        });
    },

    deleteProject: function(req, res)
    {
        var projectId = req.params.id;
        Project.findByIdAndDELETE(projectId, (err, projectRemoved) =>
        {
            if(err) return res.status(500).send({message: "Error to delete the documents"});

            if(!projectUpdate) return res.status(404).send({message: 'Couldnt delete the file'});

            return res.status(200).send({project: projectRemoved});
        });
    },

    uploadImage: function(req, res)
    {
        var projectId = req.params.id;
        var fileName = 'Image doesnt upload';
        if(req.files)
        {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == "png" || fileExt == "jpg" || fileExt == "jpeg" || fileExt == "gif")
            {
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdate) => {
                    if(err) return res.status(200).send({message: "The image havent upload"});
    
                    if(!projectUpdate) return res.status(404).send({message: "The project no exits "})
    
                    return res.status(200).send({
                        project: projectUpdate
                    });
                });
            }
            else
            {
                fs.unlink(filePath, (err) => 
                {
                    return res.status(200).send({message: "The extension is not valid"});
                });
            }
        }
        else
        {
            return res.status(200).send({
                message: fileName
            });
        }
    }
};

module.exports = controller;