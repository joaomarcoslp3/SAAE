'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.bulkInsert('complaint_state', [{
      id: 1,
      complaint_state_title: 'New',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      complaint_state_title: 'Doing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      complaint_state_title: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      complaint_state_title: 'Confirmed',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('complaint_state', null, {});
  }
};
