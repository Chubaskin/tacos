const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jugador = new Schema({
  version: Number,
  userId: String,
  userName: String,
  nombreCompleto: String,
  sexo: String,
  fechaUltimoIngreso: Date,
  numComentarios: Number,
  numLikes: Number,
  userPointsTotal: Number,
  userPointsClass: Number
})

module.exports = mongoose.model('Comentario', Comentario)
