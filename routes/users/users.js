var router = require('express').Router();
var jwt = require('jwt-simple');
var config = require('../../lib/config');
var authorizer = require('../../lib/authorizer');

var users = {
  manni: {
    password: 'zaq12wsx'
  }
};

var progresses = {
  aki: [
    {
      title: '朝起きる時間を記録しよう',
      description: '朝起きるのは大変難しいことで、簡単に習慣化できるものではない。'
    },
    {
      title: '毎日5分のプログラミング',
      description: '5分だけでも前進しよう！GOGO！'
    }
  ]
};

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
    var token = jwt.encode(payload, config.jwtSecret);
    res.json({ status: 'success', token: token });

  });

router.route('/:userId/progresses')
  .get(function(req, res, next) {
    res.json(progresses[req.params.userId] || []);
  });

module.exports = router;
