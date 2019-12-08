var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/api', function(req,res,next){



  res.redirect('/board');
});

module.exports = router;
