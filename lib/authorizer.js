var config = require('./config');
var jwt = require('jwt-simple');

var authorizer = function(req, res, next) {

  var token = req.header('Authorization');
  try {
    var payload = jwt.decode(token, config.jwtSecret);
  } catch(e) {
    return res.send(403);
  }
  req.requestUserId = payload.userId;
  next();
};

module.exports = authorizer;

