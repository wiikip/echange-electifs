var express = require('express');
var router = express.Router();
const fs = require('fs');
const {Client} = require('pg');


var readJson = (path) => {
    return (fs.readFileSync(require.resolve(path)))
  }



router.post('/addToListe', function(req, res, next){
    console.log(req.body)



  res.redirect('/board')
  
});
router.get('/getListe', function(req, res){
  
    
  const client = new Client({user : 'postgres', database : 'postgres', password : '123456789'});
  client.connect()
  client.query('SELECT * FROM Annonces', (err,rresultat,next) =>{
      
    console.log(err ? err : rresultat.rows);
    res.send(rresultat.rows);
    
    client.end()



})
})

module.exports = router;