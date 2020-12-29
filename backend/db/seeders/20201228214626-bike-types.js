'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BikeTypes', [
        {type: 'Road'},
        {type: 'Mountain'},
        {type: 'Track'},
        {type: 'Downhill'},
        {type: 'Touring'},
        {type: 'City'},
        {type: 'Youth'},
        {type: 'Beach Cruiser'},
        {type: 'Hybrid'},
        {type: 'Full-Suspension'},
        {type: 'Cargo'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('BikeTypes', null, {});
  }
};
