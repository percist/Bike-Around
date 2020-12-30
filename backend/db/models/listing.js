'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sizeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    brand: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
    model: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
    pricePerDay: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isAvailable: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    nearestCity: {
      allowNull: false,
      type: DataTypes.STRING(100)
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
      through: 'ListingBikePictures',
      otherKey: 'bikePictureId'
    };
    Listing.belongsToMany(models.Picture, columnMapping);
    Listing.belongsTo(models.User, {foreignKey: "ownerId"});
    Listing.belongsTo(models.BikeType, {foreignKey: "typeId"});
    Listing.belongsTo(models.BikeSize, {foreignKey: "sizeId"});
  };
  return Listing;
};