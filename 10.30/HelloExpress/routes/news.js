var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/news',function(req,res,next) {
  res.end("news list")
 });
module.exports = router;
