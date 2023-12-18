var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to GMart', name: null });
});

router.post('/', function (req, res, next) {

  res.render('index', { title: 'Welcome to GMart', name: req.body.name });
});

router.get('/shop', function (req, res, next) {
  res.render('shop', { title: 'Welcome to GMart', name: null });
});

router.get('/payment', function (req, res, next) {
  res.render('payment', { title: 'Welcome to GMart', name: null });
});

router.get('/findus', function (req, res, next) {
  res.render('findus', { title: 'Welcome to GMart', name: null });
});

router.get('/crypto', function (req, res, next) {
  res.render('crypto', { title: 'Welcome to GMart', name: null });
});


// router.get('/page5', function(req, res, next) {
//   res.render('page5', { title: 'Welcome to GMart', name:null });
// });

// router.get('/page6', function(req, res, next) {
//   res.render('page6', { title: 'Welcome to GMart', name:null });
// });


module.exports = router;
