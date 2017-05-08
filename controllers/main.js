const Comentario = require('../models/comentario')
const Usuario = require('../models/user');
const prettyjson = require('prettyjson');

// const userIdTest = "5900e083baf099a4a7d95776";
const userIdTest = "00010234234123";

exports.test = (req, resp) => {
  resp.send('Hola mundo desde controlador main').end;
}  // test
// ----------------------------





// ----------------------------
exports.init = (req, resp) => {
  let Jugador1 = {};
/****
  Usuario.find((err, retorno) => {
  //Jugador.find({userId:userIdTest},(err, retorno) => {
    if (err)  console.log("(10) Error:" + err)
    else {
      Jugador1 = retorno || {};
      // console.log("(14) Jugador1: "+Jugador1);
      console.log(prettyjson.render(retorno, {}));
    }  // endif
  });  // find
  /****/

  Comentario.find((err, retorno) => {
    if (err)  console.log(err)
    else {
       resp.render('index', { title: 'Red Social TasOne', comentario: retorno, Jugador: Jugador1 });
    }  // endif
  });  // find

}  // init



exports.admin = (req, resp) => {
  resp.render('admin')
}  // admin

// ----------------------------
exports.create = (req, resp) => {
  // console.log('body:', req.files.fileimage.path);
  let nuevoUsuario = new Usuario({
    version: 0.1,
    userName: req.fields.username,
    nombres: req.fields.firstname,
    apellidos: req.fields.lastname,
    nombreCompleto: req.fields.firstname + " " + req.fields.lastname,
    imagenAvatar: req.fields.fileimage,
    numComentarios: 0,
    numLikes: 0,
    userPointsTotal: req.fields.puntosusuario,
    userPointsClass: req.fields.puntoscurso
  })

  nuevoUsuario.save((err,respuesta)=>{
    if (err)  console.log(err)
    else {
      console.log('Todo OK!')
      resp.redirect('/');
    }
  }) // save

  /*****
  cloudinary.uploader.upload(req.files.fileimage.path, result => {
      let data = new Usuario({
        version: 0.1,
        userName: req.fields.username,
        nombres: req.fields.firstname,
        apellidos: req.fields.lastname,
        nombreCompleto: req.fields.firstname + " " + req.fields.lastname,
        imagenAvatar: req.fields.fileimage,
        numComentarios: 0,
        numLikes: 0,
        userPointsTotal: req.fields.puntosusuario,
        userPointsClass: req.fields.puntoscurso
      })  // Usuario

      data.save((err,respuesta)=>{
        if (err)  console.log(err)
        else {
          console.log('Todo OK!')
          resp.redirect('/');
        }

      })

  });
  /**** carga em cloudinary ****/

}

//---------------------------------
exports.clone = (req, resp) => {
  resp.render('tbsocial', { title: 'Red Social TasOne'});
}  // clone




exports.newcomment = (req,resp) => {
   // resp.send(req.fields.comentario);

   let argsTotal = req.fields.comentario;

   if (argsTotal.length < 3) {
     console.log('Vacio');
     return;
   }

   let data = new Comentario({
     version : 0.1,
     userId  : userId,
     texto   : req.fields.comentario,
     imagen  : '',
     fecha: new Date(),
     numComentarios: 0,
     numLikes: 0
   });  // Comentario

   data.save( (err, respuesta) => {
     if (err)  console.log(err)
     else {
       console.log('Todo OK!')
       resp.redirect('/');
     }  // endif
   });
}  // newcomment
