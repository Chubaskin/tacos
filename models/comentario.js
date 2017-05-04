const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comentario = new Schema({
  version : Number,
  userId  : String,
  texto   : String,
  imagen  : String,
  fecha   : Date,
  numComentarios: Number,
  numLikes: Number
})

module.exports = mongoose.model('Comentario', Comentario)
