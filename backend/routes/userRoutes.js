var express = require('express');
var userController = require('../controller/userController');
var appRoutes = express.Router();
appRoutes.get('/',userController.display);
appRoutes.post('/newTraining',userController.newTraining);
appRoutes.get('/allEntries',userController.getData);
appRoutes.put('/update/:id',userController.updateEntry);
appRoutes.delete('/delete/:id',userController.delete);

module.exports = appRoutes;