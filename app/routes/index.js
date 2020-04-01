var express = require('express');
var router = express.Router();
var LexicalDensityController = require('../controller/lexicalDensity');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
** Calculate lexical complexity
*/
router.post('/api/complexicity', LexicalDensityController.calculate);


module.exports = router;
