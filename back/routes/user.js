var express = require('express');
var User = require('../models').User;
var router = express.Router();

router.get('/', async(req, res, next) =>{
  try{
    const users = await User.findAll();  
    res.render('user', {users});
  } catch(error) {
    console.error(error);
    next(error);
  }

});

router.post('/login', async function (req, res, next){
  console.log('hi');
});



module.exports = router;