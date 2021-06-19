'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ListingBikePictures', [
      {
        listingId: 1,
        bikePictureId: 11
      },
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
      {
        listingId: 1,
        bikePictureId: 15
      },
      {
        listingId: 1,
        bikePictureId: 16
      },
      {
        listingId: 2,
        bikePictureId: 17
      },
      {
        listingId: 2,
        bikePictureId: 18
      },
      {
        listingId: 2,
        bikePictureId: 19
      },
      {
        listingId: 2,
        bikePictureId: 20
      },
      {
        listingId: 3,
        bikePictureId: 21
      },
      {
        listingId: 3,
        bikePictureId: 22
      },
      {
        listingId: 3,
        bikePictureId: 23
      },
      {
        listingId: 3,
        bikePictureId: 24
      },
      {
        listingId: 4,
        bikePictureId: 25
      },
      {
        listingId: 4,
        bikePictureId: 26
      },
      {
        listingId: 4,
        bikePictureId: 27
      },
      {
        listingId: 4,
        bikePictureId: 28
      },
      {
        listingId: 5,
        bikePictureId: 29
      },
      {
        listingId: 6,
        bikePictureId: 30
      },
      {
        listingId: 7,
        bikePictureId: 31
      },
      {
        listingId: 7,
        bikePictureId: 32
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ListingBikePictures', null, {});
  }
};
