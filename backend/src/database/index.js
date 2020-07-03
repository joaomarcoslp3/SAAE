const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Employees = require('../models/Employees');
const Users = require('../models/Users');
const Complaint = require('../models/Complaints');

const connection = new Sequelize(dbConfig);


Employees.init(connection);


Users.init(connection);
Complaint.init(connection);

Complaint.associate(connection.models);
Users.associate(connection.models);



module.exports = connection;