var router = require('express').Router();
var jwt = require('jwt-simple');

var users = {
  aki: {
    password: 'landsat510'
  }
};

var authenticate = function(req, res, next) {

  var userId = req.body['userId'];
  var password = req.body['password'];

  if (!userId) {
    return res.send(400);
  }
  if (!users[userId]) {
    return res.send(403);
  }
  if (users[userId].password !== password) {
    return res.send(403);
  }
  next();
};

router.route('/login')
  .post([authenticate], function(req, res, next) {
  });

module.exports = router;