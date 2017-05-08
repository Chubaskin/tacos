
const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('open', function () {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      if (err) {
        console.log(err);
      } else {
        console.log(names);
      }

      mongoose.connection.close();
    });
});


/**

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var collections = mongoose.connections[0].collections;
var names = [];

mongoose.connect('mongodb://localhost/tasbook', err => {
  if (err)  console.log(err)
  else console.log('Conectado a la BD' );
});

Object.keys(collections).forEach(function(k) {
    names.push(k);
});

console.log('names : _' + names + '_');

/**/


/**
// Conectar a la Base de datos
// const db = monk('localhost:27017/tasbook')
mongoose.connect('mongodb://localhost/tasbook', err => {
  if (err)  console.log(err)
  else console.log('Conectado a la BD' );
});

let schemaComentario = new Schema({
  version : Number,
  userId  : String,
  texto   : String,
  imagen  : String,
  fecha   : Date,
  numComentarios: Number,
  numLikes: Number
})

const modComm = mongoose.model('Comentario', schemaComentario);

    modComm.find({_id : "590b612b758fe13f7ce300f8"},'userId texto',(err, retorno) => {
      if (err)
      console.error(err);
      else {
        console.log(retorno);
      }  // endif
    });  // find

**/
