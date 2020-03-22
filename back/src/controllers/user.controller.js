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
    req.session.expires_at = 10
    res.redirect('/')

}
module.exports = {getUser, logout}