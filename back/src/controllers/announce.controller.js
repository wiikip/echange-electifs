const {Client} = require('pg');

var [client_id, client_secret, username, password, dbpassword, dbuser] = require('../../secrets.js')
const config = {user : dbuser, database : 'postgres', password : dbpassword, host: 'database'};
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
    console.log(req.body)
    const client = new Client(config);
    client.connect()
    console.log(req.body['user'])
    // Requete récuperant les Annonces pour la page 'page'
    if (req.body['user'] != undefined){
    var querry = {
      text : "SELECT * FROM Annonces WHERE auth_id=$3 LIMIT $1 OFFSET $2",
      values : [nbperpage, (page-1)*nbperpage, req.body['user'].login ]
    }}else{
        
        var querry = {
            text : "SELECT * FROM Annonces  LIMIT $1 OFFSET $2",
            values : [nbperpage, (page-1)*nbperpage]
          }


    }
    console.log('querry', querry)
    client.query(querry, (err,rresultat,next) =>{
      
      if(rresultat){
        res.send(rresultat.rows);
      }
    client.end()
    })
  }

  function deleteAnnounce(req, res){
    console.log("id", req.body['id'])
    const client = new Client(config);
    var querry = {
      text: " DELETE FROM Annonces WHERE id=$1",
      values : [req.body['id'],]
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

  function getNumberAds(req,res){
    console.log("je suis la")
    const client = new Client(config);
    var querry = {
      text: " SELECT COUNT(*) FROM annonces"
    }
    client.connect();
    client.query(querry, ( err, result, next ) =>{
      if(err){
        console.log(err)
      res.send({success: false, error: err})
      }
      console.log(result)
    })

  }
  module.exports = {addToList, getList, deleteAnnounce, getNumberAds}