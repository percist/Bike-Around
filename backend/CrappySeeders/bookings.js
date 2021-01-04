'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [
        {
          listingId: 1,
          userId: 1,
          startDay: "2020-12-01",
          endDay: "2020-12-04",
          status: "complete",
          duration: 3
        },
        {
          listingId: 2,
          userId: 1,
          startDay: "2020-12-05",
          endDay: "2020-12-07",
          status: "complete",
          duration: 2
        },
        {
          listingId: 3,
          userId: 1,
          startDay: "2020-12-03",
          endDay: "2020-12-11",
          status: "complete",
          duration: 7
        },
        {
          listingId: 3,
          userId: 1,
          startDay: "2021-01-29",
          endDay: "2021-01-30",
          status: "pending",
          duration: 1
        },
        {
          listingId: 4,
          userId: 1,
          startDay: "2021-01-29",
          endDay: "2021-02-07",
          status: "confirmed",
          duration: 8
        },        
        {
          listingId: 5,
          userId: 1,
          startDay: "2021-02-05",
          endDay: "2021-02-07",
          status: "confirmed",
          duration: 2
        },        
        {
          listingId: 6,
          userId: 1,
          startDay: "2021-02-05",
          endDay: "2021-02-07",
          status: "confirmed",
          duration: 2
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
