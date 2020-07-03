'use strict';
const bcrypt = require('bcryptjs');
require ('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => { 
    const hash = bcrypt.hashSync(process.env.ADMIN_PASS, 10);
    return queryInterface.bulkInsert('employees', [{
      name: 'admin',
      codFunc: '1',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
