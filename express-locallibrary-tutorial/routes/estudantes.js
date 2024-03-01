var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/exercicios', function(req, res, next) {
  res.send('rota de exercicios');
});

router.get('/provas', function(req, res, next) {
  res.send('rota prova');
});

router.get('/notas', function(req, res, next) {
    res.send('rota notas');
  });

module.exports = router;
