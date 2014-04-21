var router = require('express').Router();
var jwt = require('jwt-simple');

var users = {
  aki: {
    password: 'landsat510'
  }
};

module.exports = function(app) {

  router.route('/login')
    .post(function(req, res, next) {

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

      var payload = { userId: userId };
      var token = jwt.encode(payload, app.get('jwtSecret'));
      res.json({ status: 'success', token: token });

    });

  return router;
};



