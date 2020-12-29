'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfilePicture = sequelize.define('UserProfilePicture', {
    profilePictureId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  UserProfilePicture.associate = function(models) {
    };
  return UserProfilePicture;
};