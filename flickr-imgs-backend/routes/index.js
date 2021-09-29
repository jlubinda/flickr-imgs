var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',body: 'Welcome!' }); //render output for root url "/"
});

module.exports = router;
