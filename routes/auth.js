const router = require('express').Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.loadMainPage);


module.exports = router;