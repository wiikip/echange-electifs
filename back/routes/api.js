var express = require('express');
var router = express.Router();
dateFormat = require('dateformat')
const fs = require('fs');
const {Client} = require('pg');
const config = {user : 'postgres', database : 'postgres', password : '123456789'};
const nbperpage = 10;

var readJson = (path) => {
    return (fs.readFileSync(require.resolve(path)))
  }



router.post('/addToListe', function(req, res, next){
  const client = new Client(config);
  console.log('A');
  var wantedCourse = req.body['wantedCourse']
  console.log(typeof(req.body['wantedCourse']))
  if (typeof(req.body['wantedCourse']) === 'string' || req.body['wantedCourse'] === 'null'){
    wantedCourse = [wantedCourse]
    console.log('String',wantedCourse)
    
  };
  var now = new Date()
  
  const querry = {
    text : "INSERT INTO annonces(created_at, electif_source, electif_souhaité, sgcréneau, auth_id, message) VALUES($1, $2, $3, $4, $5, $6)",
    values : [now,req.body['receivedCourse'],[wantedCourse],req.body['sequence'], 'AuthID', req.body['message']]

  }

  client.connect();
  client.query(querry, (err,rresultat,next) =>{
      
   
    if(err){
      console.log(err)
    }
    
    client.end()
    res.redirect('/board')




  
 



  })
  
});
router.post('/getListe', function(req, res){
  
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