
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
        var project = new project();
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
    }
};

module.exports = controller;