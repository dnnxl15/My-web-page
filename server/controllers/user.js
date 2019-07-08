'use strict'

const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const controller =
{
    saveUser: async function(req, res)
    {
        const { error } = validate(req.body); 
        console.log(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email, username: req.body.username });
        if (user) return res.status(400).send('User already registered.');
        
        user = new User(_.pick(req.body, [
            'name',
            'username',
            'email',
            'password'
        ]));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save((err, UserStored) =>
        {
            if(err) return res.status(500).send({message: "Error to save the document"});

            if(!UserStored) return res.status(404).send({message: 'Couldnt save the file'});
        });
        
        const token = user.generateAuthToken();
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
    },

    getUser: function(req, res)
    {
        var UserId = req.params.id;

        if(UserId == null) return res.status(404).send({message: 'The User doesnt exists'});

        User.findById(UserId, (err, User) => {

            if(err) return res.status(500).send({message: "Error to get the document"});

            if(!User) return res.status(404).send({message: 'Couldnt find the file'});

            return res.status(200).send({User});
        });
    },

    getUsers: function(req, res)
    {
        User.find((err, user) => {

            if(err) return res.status(500).send({message: "Error to get the documents"});

            if(!user) return res.status(404).send({message: 'Couldnt find the file'});

            return res.status(200).send({user});
        });
    },

    updateUser: async function(req, res)
    {
        const UserId = req.params.id;
        const update = req.body;

        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);

        User.findByIdAndUpdate(UserId, update, (err, UserUpdate) => {
            if(err) return res.status(500).send({message: "Error to update the documents"});

            if(!UserUpdate) return res.status(404).send({message: 'Couldnt update the file'});

            return res.status(200).send({User: UserUpdate});
        });
    },

    deleteUser: function(req, res)
    {
        var UserId = req.params.id;
        User.findByIdAndDelete(UserId, (err, userRemoved) =>
        {
            if(err) return res.status(500).send({message: "Error to delete the documents"});

            if(!userRemoved) return res.status(404).send({message: 'Couldnt delete the file'});

            return res.status(200).send({user: userRemoved});
        });
    }
};

module.exports = controller;