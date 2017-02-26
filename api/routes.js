const   express     = require('express'),
        router      = express.Router();

let routes = function() {
    let     projects    = require('./controllers/projectsCtrl');

    router.route('/projects')
        .get(projects.get)
        .post(projects.post);

    return router
};

module.exports = routes;
