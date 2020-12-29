'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserProfilePictures', [
      {
        profilePictureId: 1,
        userId: 1
      },
      {
        profilePictureId: 2,
        userId: 2
      },
      {
        profilePictureId: 3,
        userId: 3
      },
      {
        profilePictureId: 4,
        userId: 4
      },
      {
        profilePictureId: 5,
        userId: 6
      },
      {
        profilePictureId: 6,
        userId: 5
      },
      {
        profilePictureId: 7,
        userId: 7
      },
      {
        profilePictureId: 8,
        userId: 8
      },
      {
        profilePictureId: 9,
        userId: 9
      },
      {
        profilePictureId: 10,
        userId: 10
      },
      {
        profilePictureId: 11,
        userId: 11
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserProfilePictures', null, {});
  }
};
