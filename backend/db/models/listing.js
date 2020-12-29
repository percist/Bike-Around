'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    brand: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
    model: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sizeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    pricePerDay: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    pricePerWeek: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isAvailable: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    latitude: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    longitude: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
  }, {});
  Listing.associate = function(models) {
    const columnMapping = {
      foreignKey: 'listingId',
      through: 'listingBikePictures',
      otherKey: 'bikePictureId'
    };
    Listing.belongsToMany(models.Picture, columnMapping);
    Listing.belongsTo(models.User, {foreignKey: "ownerId"});
    Listing.hasOne(models.BikeType, {foreignKey: "typeId"});
    Listing.hasOne(models.BikeSize, {foreignKey: "sizeId"});
  };
  return Listing;
};