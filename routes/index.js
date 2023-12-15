var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to GMart', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'Welcome to GMart', name:req.body.name });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Welcome to GMart', name:null });
});

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Welcome to GMart', name:null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Welcome to GMart', name:null });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'Welcome to GMart', name:null });
});


router.get('/page5', function(req, res, next) {
  res.render('page5', { title: 'Welcome to GMart', name:null });
});

router.get('/page6', function(req, res, next) {
  res.render('page6', { title: 'Welcome to GMart', name:null });
});

module.exports = router;
