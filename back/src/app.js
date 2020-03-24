var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const url = require('url');
var querystring = require('querystring');
var axios = require('axios')
var session = require('express-session');
var controller = require('./controller')
var [client_id, client_secret, username, password, dbpassword, dbuser] = require('../secrets.js')
const scope = "default linkcs-user:read"
var db_port = process.env.DB_PORT || '5432'

var apiRouter = require('./routes/api');

var app = express();
//Session
app.use(session({
  name: "Auth",
  store: new (require('connect-pg-simple')(session))(
    {
      /*
      connection string is built by following the syntax:
      postgres://USERNAME:PASSWORD@HOST_NAME:PORT/DB_NAME
      */
      conString: "postgres://" + dbuser +":" + dbpassword + "@database:" + db_port + "/postgres"
    }
  ),
  secret: 'yourSecret',
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  saveUninitialized: true
}));
 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/auth', controller.auth.callback)
app.use('/api',controller.auth.authMiddleware , apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
console.log(process.env.NODE_ENV)
app.get('/api', function(req,res,next){
console.log("lol")


})
module.exports = app;
