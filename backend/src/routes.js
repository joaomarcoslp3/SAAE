const express = require('express');
const empCtrl = require('./controllers/employeesController');

const routes = express.Router();

routes.get('/employees', empCtrl.index);
routes.post('/employees', empCtrl.store);

module.exports = routes;