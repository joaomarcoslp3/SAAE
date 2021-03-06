'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idElet: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        len: [ 11,11 ]
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      indexes: [
          {
              unique: true,
              fields: ['idElet']
          }
      ]
    });
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};