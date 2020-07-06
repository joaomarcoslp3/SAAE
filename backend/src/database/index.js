const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Employees = require('../models/Employees');
const Users = require('../models/Users');
const Complaint = require('../models/Complaints');
const Complaint_state = require('../models/Complaint_state');

const connection = new Sequelize(dbConfig);


Employees.init(connection);
Users.init(connection);
Complaint.init(connection);
Complaint_state.init(connection);


Complaint.associate(connection.models);
Users.associate(connection.models);
Complaint_state.associate(connection.models);




module.exports = connection;