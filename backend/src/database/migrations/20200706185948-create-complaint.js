'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('complaints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      complaint_text: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      complaint_picture: {
        allowNull: true,
        type: Sequelize.CHAR
      },
      complaint_latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      complaint_longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      complaint_state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'complaint_state', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('complaints');
  }
};