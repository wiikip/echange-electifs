var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const url = require('url');
var querystring = require('querystring');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var app = express();
var axios = require('axios')

var session = require('express-session');
var [client_id, client_secret, username, password] = require('./secrets.js')
const scope = "default linkcs-user:read"
//Session
app.use(session({
  name: "Auth",
  store: new (require('connect-pg-simple')(session))(
    {
      /*
      connection string is built by following the syntax:
      postgres://USERNAME:PASSWORD@HOST_NAME:PORT/DB_NAME
      */
      conString: "postgres://postgres:123456789@localhost:5432/postgres"
    }

  ),
  secret: 'yourSecret',
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  saveUninitialized: true
}));
 //Auth middleware

 let redirect_uri = process.env.NODE_ENV === "development" ? 'http://localhost:3000/auth' : 'https://graphe-des-assos.cs-campus.fr/auth';


function auth (req, res, next) {
  console.log("Middleware")
  if (req.session
    && req.session.expires_at
    && new Date(req.session.expires_at * 1000) > new Date()
  ) {
    next();
  } else if (req.session && req.session.refresh_token) {
    console.log(32);
    axios({
      method: 'post',
      url: "https://auth.viarezo.fr/oauth/token",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: querystring.stringify({
        'grant_type': 'refresh_token',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': scope,
        'refresh_token': req.session.refresh_token,
      })
    })
    .then(response => {
      req.session.access_token = response.data.access_token;
      req.session.expires_at = response.data.expires_at;
      req.session.refresh_token = response.data.refresh_token;
      next();
    })
  } else {
    console.log(1);
    console.log((url.format({
      pathname: 'https://auth.viarezo.fr/oauth/authorize/',
      query: {
        'redirect_uri': redirect_uri,
        'client_id': client_id,
        'response_type': 'code',
//        'state': req.session.state,
        'state': 'test',
        'scope': scope,
      }
    })))
    
    // req.session.state =
    return res.redirect(url.format({
      pathname: 'https://auth.viarezo.fr/oauth/authorize/',
      query: {
        'redirect_uri': redirect_uri,
        'client_id': client_id,
        'response_type': 'code',
//        'state': req.session.state,
        'state': 'test',
        'scope': scope,
      }
    }))
  }
}


app.get('/auth', function(req, res, next) {
  console.log(2);
  console.log(req.query.code);
  // if (req.session.state === req.body.state) {
  //   res.redirect('/');
  // } else {
  //   res.redirect('/');
  // }
  axios({
    method: 'post',
    url: "https://auth.viarezo.fr/oauth/token",
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      'grant_type': 'authorization_code',
      'code': req.query.code,
      'redirect_uri': redirect_uri,
      'client_id': client_id,
      'client_secret': client_secret,
    })
  })
  .then(response => {
    console.log("Regarde ici",response)
    req.session.access_token = response.data.access_token;
    req.session.expires_at = response.data.expires_at;
    req.session.refresh_token = response.data.refresh_token;
    
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
    res.end();
  })
})







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',auth, apiRouter);

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


}


)
module.exports = app;
