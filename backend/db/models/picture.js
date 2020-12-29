'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: {
      allowNull: false,
      type:  DataTypes.STRING(256),
    }
  }, {});
  Picture.associate = function(models) {
    const columnMapping1 = {
      foreignKey: 'bikePictureId',
      through: 'ListingBikePictures',
      otherKey: 'listingId'
    };
    const columnMapping2 = {
      foreignKey: 'profilePictureId',
      through: 'UserProfilePictures',
      otherKey: 'userId'
    };
    Picture.belongsToMany(models.Listing, columnMapping1);  
    Picture.belongsToMany(models.User, columnMapping2);  
  };
  return Picture;
};