const   express     = require('express'),
        bodyParser  = require('body-parser'),
        mongoose    = require('mongoose'),
        router      = require('./api/routes.js')(),
        config      = require('./config'),
        app         = express();

const   PORT     = config.port,
        APP_NAME = config.app_name;


mongoose.connect(config.paths.mongoDB);

let allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static('public'));
app.use('/', router);

app.listen(PORT, function () {
    console.log(`${APP_NAME} listening on port ${PORT}!`)
});

