var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const ips = req.ip;
  res.status(200).send(ips);
});

module.exports = router;
