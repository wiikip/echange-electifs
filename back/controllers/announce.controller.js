const {Client} = require('pg');

var [client_id, client_secret, username, password, dbpassword, dbuser] = require('../secrets.js')
const config = {user : dbuser, database : 'postgres', password : dbpassword};
const nbperpage = 10;

function addToList(req, res, next){
    const client = new Client(config);
    var wantedCourse = req.body['wantedCourse']
    var wCourse = [];
  
    // On crée la liste contenant le nom de tous les cours souhaités
    wantedCourse.map((course) => wCourse.push(course.value))
    
    var now = new Date()
    
    // Requete inserant une nouvelle annonce
    const querry = {
      text : "INSERT INTO annonces(created_at, electif_source, electif_souhaité, sgcréneau, auth_id, message, fullname) VALUES($1, $2, $3, $4, $5, $6, $7)",
      values : [now,req.body['receivedCourse'],wCourse,req.body['sequence'],req.body['authId'], req.body['message'], req.body['fullName']]
  
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
  }

  function getList(req, res){
    console.log('Getting List of Announces');
    var page = req.body['page'];
    const client = new Client(config);
    client.connect()
  
    // Requete récuperant les Annonces pour la page 'page'
    const querry = {
      text : "SELECT * FROM Annonces LIMIT $1 OFFSET $2",
      values : [nbperpage, (page-1)*nbperpage]
    }
  
    client.query(querry, (err,rresultat,next) =>{
      
      if(rresultat){
        console.log('lignes', rresultat)
        res.send(rresultat.rows);
      }
    client.end()
    })
  }

  module.exports = {addToList, getList}