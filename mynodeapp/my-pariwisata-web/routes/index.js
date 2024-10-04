var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/paketwisata', function(req, res, next){
  res.render('paketwisata', {title: 'Paket Wisata'});
});
router.get('/orderpaket', function(req, res, next){
  res.render('orderpaket', {title: 'Order Paket'});
});
router.get('/orderdetail', function(req, res, next){
  res.render('orderdetail', {title: 'Order Detail'});
});
module.exports = router;
