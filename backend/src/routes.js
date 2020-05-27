const express = require('express');
const userController = require('./controllers/usersController');
const complaintController = require('./controllers/complaintsController');
const employeesController = require('./controllers/employeesController');
const webScapringController = require('./controllers/webScapringController');


const routes = express.Router();


//rotas usuários
routes.get('/users/find', userController.index);
routes.get('/users/findone:idElet', userController.findOne);
routes.post('/users/create', userController.store);
routes.delete('/users/delete:idElet', userController.remove);
routes.post('/users/login', userController.auth);

//rotas reclamações
routes.post('/users/:user_id/complaint/', complaintController.store)
routes.get('/complaint/findAll', complaintController.index);
routes.get('/users/:user_id/complaint/findOne', complaintController.findOne);
routes.delete('/users/:user_id/complaint/delete:id', complaintController.remove);
routes.get('/complaint/findUnsolved', complaintController.findUnsolved);

//rotas encarregados
routes.get('/employees/find', employeesController.index);
routes.post('/employees/create', employeesController.store);
routes.delete('/employees/delete:codFunc', employeesController.remove);
routes.post('/employees/login', employeesController.auth);

//login SAAE
routes.get('/SAAE/:idElet', webScapringController.scrape);


module.exports = routes;