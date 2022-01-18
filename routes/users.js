var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send({ 'message':'node post success React20201' });
});

module.exports = router;
