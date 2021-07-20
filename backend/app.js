var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const session = require('express-session')

var indexRouter = require('./routes/indexRouter')
var usersRouter = require('./routes/usersRouter')
const servicesRouter = require('./routes/servicesRouter')

var app = express()

app.use(session({ secret: 'cookies', saveUninitialized: true, resave: true }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/services', servicesRouter)

module.exports = app
