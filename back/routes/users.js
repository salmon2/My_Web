var express = require('express');
var router = express.Router();
var User = require('../models').User;
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  console.log('get')
});




router.post('/login', passport.authenticate('login',{
  successRedirect: '/',
  failureRedirect: '/login'
}))

router.post('/join', passport.authenticate('join',{
  successRedirect: '/',
  failureRedirect: '/join'
}))


module.exports = router;
