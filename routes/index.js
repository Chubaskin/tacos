const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Red Social TasOne' });
});


/* GET home page. */
router.get('/index.html', (req, res, next) => {
  //res.send('Pagina de TasOne');
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


router.get('/jose', (req, res, next) => {
  //res.send('Pagina de TasOne');
  var fileName = 'dummy/index.html';
  res.sendFile(__dirname + '/' + fileName);
});


router.get("/info.php", function(request, response) {

    response.send(request.get('user-agent'));

});

module.exports = router;
