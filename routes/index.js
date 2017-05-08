// Gestion de rutas
const express = require('express');
const router = express.Router();
const main = require('.././controllers/main');


/* GET home page. */
router.get('/', main.init);
router.get('/admin', main.admin);
router.post('/create', main.create);
router.get('/tb', main.clone );
router.post('/postestado', main.newcomment);
router.get('/test', main.test);


module.exports = router;
