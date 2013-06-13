var express = require('express'),
    routes = require('./routes'),
    engines = require('consolidate'),
    mongoose = require('mongoose');

exports.startServer = function(config, callback) {
  var app = express();
  var server = app.listen(config.server.port, function() {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
  });

  mongoose.connect('mongodb://localhost/fepp');

  app.configure(function() {
    app.set('port', config.server.port);
    app.set('views', config.server.views.path);
    app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
    app.set('view engine', config.server.views.extension);
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(config.server.base, app.router);
    app.use(express.static(config.watch.compiledDir));
  });

  app.configure('development', function() {
    app.use(express.errorHandler());
  });

  app.use(function(req, res, next){
    //TODO: move the congregation number for this install to a configuration file. currently only supporting single congregation per install.
    res.locals.CongregationNumber = 1;    
    next();
  });

  app.get('/', routes.index(config));
  app.get('/api/congregations', routes.index(config));

  callback(server);
};

