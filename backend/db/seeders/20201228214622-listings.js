'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Listings', [
      {
        brand: 'Trek',
        model: 'Domane',
        typeId: 1,
        sizeId: 5,
        pricePerDay: 5000,
        pricePerWeek: 10000,
        isAvailable: true,
        ownerId: 1,
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
      },
      {
        brand: 'Trek',
        model: 'Madone',
        typeId: 1,
        sizeId: 7,
        pricePerDay: 5000,
        pricePerWeek: 10000,
        isAvailable: true,
        ownerId: 1,
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
      },
      {
        brand: 'Trek',
        model: 'Emonda',
        typeId: 1,
        sizeId: 6,
        pricePerDay: 5000,
        pricePerWeek: 10000,
        isAvailable: true,
        ownerId: 1,
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
