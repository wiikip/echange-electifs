var express = require('express');
var router = express.Router();
const fs = require('fs');
var readJson = (path) => {
    return (fs.readFileSync(require.resolve(path)))
  }



router.post('/addToListe', function(req,res,next){
    console.log(req.body)



  res.redirect('/board')
  
});
router.get('/getListe', function(req,res,next){
    var response = JSON.parse(readJson('../public/annonces.json'))
    console.log(response)
    res.json(response);




})

module.exports = router;