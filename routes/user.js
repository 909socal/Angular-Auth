var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  router.post('/register', function(req, res, next){


  	User.register(req.body, function(err, user){
  		res.status(err ? 400 : 200).send(err || user)
  	})
  })
});

module.exports= router;
