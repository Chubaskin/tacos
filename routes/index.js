// Gestion de rutas
const express = require('express');
const router = express.Router();
const Comentario = require('../models/comentario');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Red Social TasOne' });
});


/* GET home page. */
router.get('/datos', (req, res, next) => {
  Comentario.find((req, retorno) => {
    if (err)  console.log(err)
    else {
      res.render('index', { title: 'Red Social TasOne', comentario: retorno });  
    }
  });
});


/* GET home page. */
router.get('/index.html', (req, res, next) => {
  //res.send('Pagina de TasOne');
  console.log(req);
  var fileName = 'dummy/sample2.html';
  res.sendFile(__dirname + '/' + fileName);
});

router.get('/brief', (req, res, next) => {
  //res.send('Pagina de TasOne');
  var fileName = 'dummy/brief.html';
  res.sendFile(__dirname + '/' + fileName);
});

router.get('/social', (req, res, next) => {
  //res.send('Pagina de TasOne');
  var fileName = 'dummy/sample2.html';
  res.sendFile(__dirname + '/' + fileName);
});

router.post('/postestado', (req, res, next) => {
      res.send(req.fields.comentario);
});

router.get('/jose', (req, res, next) => {
  //res.send('Pagina de TasOne');
  var fileName = 'dummy/index.html';
  res.sendFile(__dirname + '/' + fileName);
});


router.get("/info.php", function(request, response) {

    response.send(request.get('user-agent'));

});

module.exports = router;
