'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "BikeTypes"}
      },
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "BikeTypes"}
      },
      brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pricePerDay: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      isAvailable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      nearestCity: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Listings');
  }
};