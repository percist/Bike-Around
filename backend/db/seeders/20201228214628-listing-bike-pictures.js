'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ListingBikePictures', [
      {
        listingId: 1,
        bikePictureId: 12
      },
      {
        listingId: 1,
        bikePictureId: 13
      },
      {
        listingId: 1,
        bikePictureId: 14
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ListingBikePictures', null, {});
  }
};
