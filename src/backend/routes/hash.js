var express = require('express');
var router = express.Router();

/* GET hash call */
router.get('/', function(req, res, next) {
  res.send('hash called');
});

module.exports = router;
