const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let esquemaUser = new Schema({
  version: Number,
  userId: String,
  userName: String,
  nombres: String,
  apellidos: String,
  nombreCompleto: String,
  imagenAvatar: String,
  sexo: String,
  fechaUltimoIngreso: Date,
  numComentarios: Number,
  numLikes: Number,
  userPointsTotal: Number,
  userPointsClass: Number
})

module.exports = mongoose.model('User', esquemaUser)
