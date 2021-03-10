'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeType = sequelize.define('BikeType', {
    type: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
  }, {});
  BikeType.associate = function(models) {
    BikeType.hasMany(models.Listing, {foreignKey: "typeId"})
  };
  return BikeType;
};