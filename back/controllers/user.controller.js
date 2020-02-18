var axios = require('axios')

function getUser(req, res, next){
    axios.get('https://auth.viarezo.fr/api/user/show/me',
    {
        headers:{ Authorization: "Bearer %s" % req.session.access_token}



    }).then(result => res.send(result))
    .catch( err => res.send({success: false}))
    



}

module.exports = {getUser}