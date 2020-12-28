'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>{ 
      return queryInterface.bulkInsert('UserInterestSizes', [
      {
        userId: 1,
        sizeId: 1
      },
      {
        userId: 2,
        sizeId: 1
      },
      {
        userId: 3,
        sizeId: 3
      },
      {
        userId: 7,
        sizeId: 5
      },
      {
        userId: 1,
        sizeId: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserInterestSizes', null, {});
  }
};
