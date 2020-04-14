var express = require('express');
var router = express.Router();
const fs = require('fs');

const bodyParser = require('body-parser');



var controller = require('../controller')
  

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// POST at /api/addToListe
router.post('/addToListe', controller.announce.addToList);

// POST at /api/getListe
router.post('/getListe', controller.announce.getList)

router.post('/getNumberAds', controller.announce.getNumberAds)

// POST at /api/session/get_loged_user
router.post('/session/get_loged_user', controller.user.getUser)
// GET at /api/logout
router.get('/logout', controller.user.logout)

router.get('/login', controller.user.login)
//POST at /api/delete
router.post('/delete', controller.announce.deleteAnnounce)

module.exports = router;