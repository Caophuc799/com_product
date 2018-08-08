import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import mongoose from 'mongoose'

import config from './config'
import apiRoutes from './routes/index'
// import usersRouter from './routes/users'

var app = express()

mongoose.Promise = require('bluebird')
// mongoose.connect('mongodb://localhost:27017/com_pro', { promiseLibrary: require('bluebird') })
//   .then(() => console.log('connection succesful'))
//   .catch((err) => console.error(err))
mongoose.connect(config.DB)
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../build')))

app.use(passport.initialize())
app.use(passport.session())
apiRoutes(app, passport)

// app.use('/', indexRouter)
// app.use('/users', usersRouter)

// catch 404 and forward to error handler
var port = config.APP_PORT || 4000
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Pass to next layer of middleware
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
