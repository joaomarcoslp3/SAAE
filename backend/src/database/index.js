const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

<<<<<<< HEAD
const Employees = require('../models/Employees');

const connection = new Sequelize(dbConfig);

Employees.init(connection);
=======
const Users = require('../models/Users');
const Complaint = require('../models/Complaints');


const connection = new Sequelize(dbConfig);

Users.init(connection);
Complaint.init(connection);

Complaint.associate(connection.models);
Users.associate(connection.models);


>>>>>>> a

module.exports = connection;