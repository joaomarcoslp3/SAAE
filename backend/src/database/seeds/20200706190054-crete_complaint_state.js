'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.bulkInsert('complaint_state', [{
      complaint_state_title: 'New',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      complaint_state_title: 'To do',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      complaint_state_title: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('complaint_state', null, {});
  }
};
