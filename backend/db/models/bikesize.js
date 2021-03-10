'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeSize = sequelize.define('BikeSize', {
    name: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
  }, {});
  BikeSize.associate = function(models) {
    BikeSize.hasMany(models.Listing, {foreignKey: "sizeId"});
  };
  return BikeSize;
};