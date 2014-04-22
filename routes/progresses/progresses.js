var router = require('express').Router();

var progresses = {
  pg1: [
    {
      date: new Date(new Date().getDate()),
      message: 'ui-routerはとても便利だ。ひとつ欠点を挙げるとすれば、stateとviewsを関連させる為の指定が、直感的ではないことだろう。今も、何故動いているのか完璧には理解できていない。ui-routerからすると、viewの入れ子は展開されてから解釈されているようだ。なんとなく気持ち悪い実装に感じてしまう。私が思想を理解できていないだけなのだろう。'
    },
    {
      date: new Date(new Date().getDate() - 1),
      message: '結局マクドナルドが一番集中できる場所のようだ。というか、人に見られている環境が一番集中できるらしい。余計なことができないことがよい効果をもたらしているのだと感じる。gulpのwatchが効いている状態でhtmlをガシガシ編集すると、さすがに多少の重さを感じる。'
    }
  ]
};

router.route('/:progressId/timeline')
  .get(function(req, res, next) {
    res.json(progresses[req.params.progressId] || []);
  });

module.exports = router;
