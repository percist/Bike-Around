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
    Picture.belongsToMany(models.Listing, columnMapping1);  
  };
  return Picture;
};