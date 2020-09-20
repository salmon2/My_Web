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


router.post('/login', async (req, res, next )=>{
  passport.authenticate('login', function(err, user, info) {
    console.log('routes : ',user)
    if (err) { return next(err) }
    if (!user) { return res.status(404).json( { message: info.message }) }
    res.status(200).json(user);
  })(req, res, next);   
});

router.post('/join', passport.authenticate('join',{
  successRedirect: '/',
  failureRedirect: '/join'
}))


module.exports = router;
