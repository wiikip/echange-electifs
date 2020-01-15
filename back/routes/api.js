var express = require('express');
var router = express.Router();
dateFormat = require('dateformat')
const fs = require('fs');
const {Client} = require('pg');
const config = {user : 'postgres', database : 'postgres', password : '123456789'};
const nbperpage = 10;
const bodyParser = require('body-parser');
const session = require('express-session');
const auth = require("viarezo-auth");
var configOauth = {
  client_id : '1ca8af07a759c616697cf26bcf0f871a2b1068dd',
  client_secret: '81256e54adc9c1947154b23dc8c064d0f00ca322',
  domain: 'localhost:3000',
}


var readJson = (path) => {
    return (fs.readFileSync(require.resolve(path)))
  }

// OauthVR Setup

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({
    secret: 'yourSecret',
    resave: false,
    proxy: true, // Especially if unsing nginx/apache
    saveUninitialized: true,
    cookie: { secure: true }
  }));

// router.use(auth.OAuthMiddleware(configOauth));
// router.get('/auth', (req,res)=>auth.AuthCallback(req, res));
  





router.post('/addToListe', function(req, res, next){
  const client = new Client(config);
  console.log('A');
  var wantedCourse = req.body['wantedCourse']
  console.log('b',wantedCourse)
  var wCourse = [];
  wantedCourse.map((course) => wCourse.push(course.value))
  console.log(wCourse)
  
    

  var now = new Date()
  
  const querry = {
    text : "INSERT INTO annonces(created_at, electif_source, electif_souhaité, sgcréneau, auth_id, message) VALUES($1, $2, $3, $4, $5, $6)",
    values : [now,req.body['receivedCourse'],wCourse,req.body['sequence'], 'AuthID', req.body['message']]

  }

  client.connect();
  client.query(querry, (err,rresultat,next) =>{
      
   console.log('aaaaaaa')
    if(err){
      console.log(err)
      res.send({success: false})
    }
    
    




  
 
    client.end()
    console.log('bbbbbbbbbbbb')
    res.send({success: true})


  })
  
  
});
router.post('/getListe', function(req, res){
  console.log('Getting List of Announces')
  var page = req.body['page']
  const client = new Client(config);
  client.connect()
  var now = new Date()
  const querry = {
    text : "SELECT * FROM Annonces LIMIT $1 OFFSET $2",
    values : [nbperpage, (page-1)*nbperpage]

  }
  // console.log(dateFormat(now, "dd/mm/yy").toString())
  client.query(querry, (err,rresultat,next) =>{
    console.log(rresultat)
    if(rresultat){
      res.send(rresultat.rows);
    }
      

    
    // console.log(err ? err : rresultat.rows);
    
    
    client.end()



})
})

module.exports = router;