'use strict'

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
        project.year = params.year;
        project.category = params.category;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: "Error to save the project"});

            if(!projectStored) return res.status(404).send({message: "Can't save the project"});

            return res.status(200).send({project: projectStored});

        });
        
    }

}