// Constantes
const
    express = require('express'),
    jade = require('jade'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    formidable = require('express-formidable'),
    mongoose = require('mongoose');

// Rutas
const routes = require('./routes/index')
const users = require('./routes/users')

const app = express()

// Uso de Jade
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(cookieParser())

// Rutas estáticas
app.use(express.static(path.join(__dirname, 'public')))

app.use( formidable({
  encoding: 'utf-8',
  uploadDir: './public/uploads',
  keepExtensions: true,
  multiples: true
}));

// Esta linea debe ir después de la deficnipon de rutas
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})


// Conectar a la Base de datos
// const db = monk('localhost:27017/tasbook')
mongoose.connect('mongodb://localhost/tasbook', err => {
  if (err)  console.log(err)
  else console.log('Conectado a la BD' );
});


/******
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
***/

// const datos = require('./datos/userdata.json')
// console.log("Usuario: " ,datos.userName)

module.exports = app
