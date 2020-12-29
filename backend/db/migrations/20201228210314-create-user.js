'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,      
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      streetAddress1: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      streetAddress2: {
        type: Sequelize.STRING(100),
        allowNull: false,    
      },
      city: {
        type: Sequelize.STRING(256),
        allowNull: false,      
      },
      state: {
        type: Sequelize.STRING(30),
        allowNull: false,      
      },
      zip: {
        type: Sequelize.STRING(10),
        allowNull: false,      
      },
      phoneNumber: {
        type: Sequelize.STRING(30),
        allowNull: false,      
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};