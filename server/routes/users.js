var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
      "_id" : 1234,
      "username" : "cwbuecheler",
      "email" : "cwbuecheler@nospam.com"
    
  }, {
    "_id" : 12345,
    "username" : "cwbuecheler2",
    "email" : "cwbuecheler2@nospam.com"
  }]);
});

module.exports = router;