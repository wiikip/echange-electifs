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
    var listeAnnounce = []
    response.forEach(annonce => {
      var ann = []
      ann.push(annonce["sequence"])
      ann.push(annonce["postingDate"])
      ann.push(annonce["name"])
      ann.push(annonce["receivedCourse"])
      ann.push(annonce["wantedCourse"])
      ann.push(annonce["message"])
     listeAnnounce.push(ann)});
    res.send(listeAnnounce);




})

module.exports = router;