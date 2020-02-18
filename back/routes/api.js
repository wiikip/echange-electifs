var express = require('express');
var router = express.Router();
dateFormat = require('dateformat')
const fs = require('fs');
const {Client} = require('pg');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth = require("viarezo-auth");
var [client_id, client_secret, username, password, dbpassword, dbuser] = require('../secrets.js')

const config = {user : dbuser, database : 'postgres', password : dbpassword};
const nbperpage = 10;
  

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// POST at /api/addToListe
router.post('/addToListe', function(req, res, next){
  const client = new Client(config);
  var wantedCourse = req.body['wantedCourse']
  var wCourse = [];

  // On crée la liste contenant le nom de tous les cours souhaités
  wantedCourse.map((course) => wCourse.push(course.value))
  
  var now = new Date()
  
  // Requete inserant une nouvelle annonce
  const querry = {
    text : "INSERT INTO annonces(created_at, electif_source, electif_souhaité, sgcréneau, auth_id, message) VALUES($1, $2, $3, $4, $5, $6)",
    values : [now,req.body['receivedCourse'],wCourse,req.body['sequence'], 'AuthID', req.body['message']]

  }
  client.connect();
  client.query(querry, (err,rresultat,next) =>{
  if(err){
      console.log(err)
      res.send({success: false})
  }
  client.end()
  res.send({success: true})
  })
  
  
});

// POST at /api/getListe
router.post('/getListe', function(req, res){
  console.log('Getting List of Announces');
  var page = req.body['page'];
  const client = new Client(config);
  client.connect()
  var now = new Date()

  // Requete récuperant les Annonces pour la page 'page'
  const querry = {
    text : "SELECT * FROM Annonces LIMIT $1 OFFSET $2",
    values : [nbperpage, (page-1)*nbperpage]
  }

  client.query(querry, (err,rresultat,next) =>{
    
    if(rresultat){
      res.send(rresultat.rows);
    }
  client.end()
  })
})

module.exports = router;