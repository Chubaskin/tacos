const prettyjson = require('prettyjson');
const express = require('express');
const router = express.Router();


/* GET userlist. */
router.get('/userlist', (req, res) => {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},(e,docs) =>{
        res.json(docs);
    });
});

/* GET user by ID */
router.get('/userdata/:id', (req, res) => {
  console.log('por ID');

  var options = {
    noColor: true
  };

    var db = req.db;
    var collection = db.get('portada');
    var userToShow =  req.params.id;
    collection.findById(userToShow, (error, userRes) => {
      console.log(prettyjson.render(userRes.actividad.publicaciones[1], options));
      res.json(userRes);
    });

});


/* GET user by ID */
router.get('/userdata/:id/:activId', (req, res) => {
    var db = req.db;
    console.log(prettyjson.render(data, options));
    var collection = db.get('portada');
    var userToShow =  req.params.id;
    collection.findById(userToShow, (error, userRes) => {
      res.json(userRes.publicaciones);
    });
    /*
    collection.find({},{},(e,docs) =>{
        res.json(docs);
    });*/
});



/* delete user  */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});


module.exports = router;


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
