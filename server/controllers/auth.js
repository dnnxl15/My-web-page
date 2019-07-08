'use strict'

const _ = require('lodash');
const { User, validate }= require('../models/user');
const bcrypt = require('bcrypt');

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

    authUser: async function(req, res)
    {
        var user = new User( _.pick(req.body, ['username', 'password']));
        let findUser = await User.findOne({username: user.username});

        if(!findUser) return res.status(400).send("Invalid username or password");
        const validPassword = await bcrypt.compare(user.password, findUser.password);

        if(!validPassword) return res.status(400).send("Invalid username or password");

        const token = findUser.generateAuthToken();
        res.send(token);
    }
};

module.exports = controller;