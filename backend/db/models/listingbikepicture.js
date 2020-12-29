'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingBikePicture = sequelize.define('ListingBikePicture', {
    listingId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    bikePictureId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  ListingBikePicture.associate = function(models) {
  };
  return ListingBikePicture;
};