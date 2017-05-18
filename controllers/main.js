const Comentario = require('../models/comentario')
const Usuario = require('../models/user');
const prettyjson = require('prettyjson');

// const userIdTest = "5900e083baf099a4a7d95776";
const userIdTest = "5910681ac665ba72d5e7ad3a";

exports.test = (req, resp) => {
  resp.send('Hola mundo desde controlador main').end;
}  // test
// ----------------------------



// ----------------------------
exports.init = (req, resp) => {
  let Jugador1 = {};
/****/
  Usuario.findById(userIdTest,(err, retorno) => {
  //Jugador.find({userId:userIdTest},(err, retorno) => {
    if (err)  console.log("(10) Error:" + err)
    else {
      Jugador1 = retorno || {};
      console.log("(24) Jugador1: "+Jugador1);
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
exports.clone2 = (req, resp) => {

  var datosJugador = "Pepito";

  let Jugador1 = {};
/****
  Usuario.findById(userIdTest,(err, retorno) => {
  //Jugador.find({userId:userIdTest},(err, retorno) => {
    if (err)  console.log("(110) Error:" + err)
    else {
      Jugador1 = retorno || {};
      console.log("(111) Jugador1: "+Jugador1);
    }  // endif
  });  // find
  /****/


/****/
// const promesa = Jugador.find({userId:userIdTest}).exec();
const promesa = Usuario.findOne({ _id: userIdTest}).exec();

  promesa.then((retorno) => {
      datosJugador = retorno || {};

      console.log("(110) Jugador1: "+prettyjson.render(datosJugador,{}));
      resp.render('tbsocial', { title: 'Red Social TasOne', Jugador: datosJugador });
      // resp.send(datosJugador).end;
  })
  .catch( (err) => {
      console.log("(114) Error:" + err)
  });
  console.log("(116) Jugador1: "+prettyjson.render(datosJugador,{}));
}  // clone

//---------------------------------
exports.clone = (req, resp, next, uid) => {

  var datosJugador = "";

  Usuario.findById(uid).exec().then((retorno) => {
    if (!retorno) {
      console.error("Not Found!");
      error.status = 404;
      throw error;
    } // if
    datosJugador = retorno || {};
    console.log("(114) Jugador1: "+prettyjson.render(datosJugador,{}));
    return next();

  }).catch(next);  // find

/****
  Usuario.findById(userIdTest,(err, retorno) => {
    if (err)  console.log("(104) Error:" + err)
    else {
      datosJugador = retorno || {};
    }  // endif
  });  // find
  /****/
  console.log("(114) Jugador1: "+prettyjson.render(datosJugador,{}));

// resp.render('tbsocial', { title: 'Red Social TasOne'});
//  resp.render('tbsocial', { title: 'Red Social TasOne', Jugador: Jugador1 });
  // resp.render('tbsocial', { title: 'Red Social TasOne', Jugador: {} });
}  // clone




exports.newcomment = (req,resp, next) => {
   // resp.send(req.fields.comentario);

   let argsTotal = req.fields.comentario;

   if (argsTotal.length < 3) {
     console.log('Vacio');
     return;
   }

   let data = new Comentario({
     version : 0.1,
     userId  : userIdTest,
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
