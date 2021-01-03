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
        // {
        //   listingId: 2,
        //   userId: 2,
        //   startDay: "2020-12-05",
        //   endDay: "2020-12-07",
        //   status: "complete",
        //   duration: 2
        // },        
        // {
        //   listingId: 2,
        //   userId: 2,
        //   startDay: "2020-12-05",
        //   endDay: "2020-12-07",
        //   status: "complete",
        //   duration: 2
        // },        
        // {
        //   listingId: 2,
        //   userId: 2,
        //   startDay: "2020-12-05",
        //   endDay: "2020-12-07",
        //   status: "complete",
        //   duration: 2
        // },
        {
          listingId: 2,
          userId: 2,
          startDay: "2020-12-05",
          endDay: "2020-12-07",
          status: "complete",
          duration: 2
        },
        {
          listingId: 3,
          userId: 3,
          startDay: "2020-12-03",
          endDay: "2020-12-11",
          status: "complete",
          duration: 7
        },
        {
          listingId: 3,
          userId: 3,
          startDay: "2020-12-29",
          endDay: "2012-01-03",
          status: "confirmed",
          duration: 6
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
