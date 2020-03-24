const express = require('express');
<<<<<<< HEAD
const empCtrl = require('./controllers/employeesController');

const routes = express.Router();

routes.get('/employees', empCtrl.index);
routes.post('/employees', empCtrl.store);
=======
const userController = require('./controllers/usersController');
const complaintController = require('./controllers/complaintsController');


const routes = express.Router();


//rotas usuários
routes.get('/users/find', userController.index);
routes.get('/users/findone:idElet', userController.findOne);
routes.post('/users/create', userController.store);
routes.delete('/users/delete:idElet', userController.remove);

//rotas reclamações
routes.post('/users/:user_id/complaint/', complaintController.store)
routes.get('/complaint/findAll', complaintController.index);
routes.get('/users/:user_id/complaint/findOne', complaintController.findOne);
routes.get('/users/:user_id/complaint/delete:id', complaintController.remove);

//rotas encarregados


>>>>>>> a

module.exports = routes;