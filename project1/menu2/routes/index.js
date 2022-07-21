var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page1: '회사소개', page2: '제품소개', page3: '서비스', page4: '커뮤니티'});
});

module.exports = router;
