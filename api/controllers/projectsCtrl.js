const   Project     = require('../models/projects'),
        co          = require('co'),
        dbHandler   = require('../handler/dbHandler');

let controller = {
    get: co.wrap(function * (req,res){
        try {
            let projects = yield dbHandler.find(Project);
            res.status(200).send(projects)
        }
        catch(e) { res.status(400).send(e) }
    }),
    post: co.wrap(function * (req,res){
        try {
            let payload = req.body;
            yield dbHandler.save(Project, payload);
            let projects = yield dbHandler.find(Project);
            res.status(200).send(projects)
        }
        catch(e) { res.status(400).send(e) }
    }),

};

module.exports = controller;
