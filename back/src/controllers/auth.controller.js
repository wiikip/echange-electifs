const url = require('url');
var querystring = require('querystring');
var axios = require('axios')
const scope = "default linkcs-user:read"
var [client_id, client_secret, username, password, dbpassword, dbuser] = require('../../secrets.js')


//Auth middleware
let redirect_uri = process.env.NODE_ENV === "development" ? 'http://localhost:3000/auth' : 'urldusite';
function authMiddleware (req, res, next) {
  
  console.log("Middleware")
  if (req.session
    && req.session.expires_at
    && new Date(req.session.expires_at * 1000) > new Date()
  ) {
    next();
  } else if (req.session && req.session.refresh_token) {
    console.log(32, req.session);
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
    }).catch(
      err => {console.log(err)
      req.session = null
      if (req.session){
        console.log(req.session)
      }
      
      
      }
    )
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

function callback(req, res, next) {
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
  }
module.exports =
    {authMiddleware,
    callback
    
    }