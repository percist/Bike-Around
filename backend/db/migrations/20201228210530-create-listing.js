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
      brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
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
      pricePerDay: {
        allowNull: false,
        type: Sequelize.INTEGER[6]
      },
      pricePerWeek: {
        allowNull: false,
        type: Sequelize.INTEGER[7]
      },
      isAvailable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Listings');
  }
};