var config = require('./lib/config.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Middleware
app.use(bodyParser.json());

// Setting
app.set('jwtSecret', config.jwtSecret);

// Simple logger
app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

// Routing
app.use('/users', require('./routes/users/users'));
app.use('/progresses', require('./routes/progresses/progresses'));

// Start server
app.listen(config.port, function() {
  console.log('Sever starts on port: %s', config.port);
});