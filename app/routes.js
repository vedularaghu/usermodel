//create a new express router
const express = require ('express'),
router = express.Router();
mainController= require('./controller/main.controller')

//export router(we require in server.js file)
module.exports = router;

//define routes
router.get('/', mainController.showHome);
