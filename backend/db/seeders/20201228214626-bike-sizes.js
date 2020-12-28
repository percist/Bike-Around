'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BikeSizes', [
        { name: 'xsmall' },
        { name: 'small' },
        { name: 'medium' },
        { name: 'large' },
        { name: 'xlarge' },
        { name: '48cm' },
        { name: '50cm' },
        { name: '52cm' },
        { name: '54cm' },
        { name: '56cm' },
        { name: '58cm' },
        { name: '60cm' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('BikeSizes', null, {});
  }
};
