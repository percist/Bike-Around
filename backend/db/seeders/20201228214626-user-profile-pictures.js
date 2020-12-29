'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserProfilePictures', [
      {
        ProfilePictureId: 1,
        UserId: 1
      },
      {
        ProfilePictureId: 2,
        UserId: 2
      },
      {
        ProfilePictureId: 3,
        UserId: 3
      },
      {
        ProfilePictureId: 4,
        UserId: 4
      },
      {
        ProfilePictureId: 5,
        UserId: 6
      },
      {
        ProfilePictureId: 6,
        UserId: 5
      },
      {
        ProfilePictureId: 7,
        UserId: 7
      },
      {
        ProfilePictureId: 8,
        UserId: 8
      },
      {
        ProfilePictureId: 9,
        UserId: 9
      },
      {
        ProfilePictureId: 10,
        UserId: 10
      },
      {
        ProfilePictureId: 11,
        UserId: 11
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserProfilePictures', null, {});
  }
};
