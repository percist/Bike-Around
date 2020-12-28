'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserInterestTypes', [
      {
        userId: 1,
        typeId: 1
      },
      {
        userId: 2,
        typeId: 1
      },
      {
        userId: 3,
        typeId: 3
      },
      {
        userId: 7,
        typeId: 5
      },
      {
        userId: 1,
        typeId: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserInterestTypes', null, {});
  }
};
