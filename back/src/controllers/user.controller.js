var axios = require('axios')

function getUser(req, res, next){
    axios.get('https://auth.viarezo.fr/api/user/show/me',
    {
        headers:{ authorization: "Bearer "   + req.session.access_token}



    }).then(result => { res.send(result.data) })
    .catch( err => { res.send({succes: false})})
}

function logout(req, res, next){
    req.session.access_token = null
    req.session.refresh_token = null
    req.session.expires_at = 0
    return res.redirect('/')

}

function login(req, res, next){
    return res.redirect( url.format({
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
module.exports = {getUser, logout, login}