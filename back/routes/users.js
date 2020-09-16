var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.json('get');
});
router.post('/login',async (req, res, next) => {
  // res.json('post');

  const user = await User.findAll();
  res.json(user);
  console.log(req.body);
});





module.exports = router;
