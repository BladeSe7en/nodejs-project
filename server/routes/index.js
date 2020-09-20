var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('getting home page')
  res.render('index', { title: 'Contact me', description: 'This is a new demo' });
});

module.exports = router;
