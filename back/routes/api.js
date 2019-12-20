var express = require('express');
var router = express.Router();
dateFormat = require('dateformat')
const fs = require('fs');
const {Client} = require('pg');
const config = {user : 'postgres', database : 'postgres', password : '123456789'}

var readJson = (path) => {
    return (fs.readFileSync(require.resolve(path)))
  }



router.post('/addToListe', function(req, res, next){
  const client = new Client(config);
  console.log(req.body)
  var now = new Date()

  const querry = {
    text : "INSERT INTO annonces(created_at, electif_source, electif_souhaité, sgcréaneau, auth_id, message) VALUES($1, $2, $3, $4, $5, $6)",
    values : [now,req.body['receivedCourse'],[req.body['wantedCourse']],req.body['sequence'], req.body['prenom'], req.body['message']]

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
router.get('/getListe', function(req, res){
  
    
  const client = new Client(config);
  client.connect()
  var now = new Date()
  
  console.log(dateFormat(now, "dd/mm/yy").toString())
  client.query('SELECT * FROM Annonces', (err,rresultat,next) =>{
      
    console.log(err ? err : rresultat.rows);
    res.send(rresultat.rows);
    
    client.end()



})
})

module.exports = router;