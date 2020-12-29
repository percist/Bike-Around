'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BikeRatings', [
        {
          bookingId: 1,
          userId: 1,
          review: "Great Bike!",
          stars: 7
        },
        {
          bookingId: 2,
          userId: 2,
          review: "Not very well maintained",
          stars: 2
        },
        {
          bookingId: 3,
          userId: 3,
          review: "Wonderful experience. Would definitely book this bike again.",
          stars: 8
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('BikeRatings', null, {});
  }
};
