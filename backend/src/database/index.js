const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Employees = require('../models/Employees');

const connection = new Sequelize(dbConfig);

Employees.init(connection);

module.exports = connection;