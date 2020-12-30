'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeType = sequelize.define('BikeType', {
    type: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
  }, {});
  BikeType.associate = function(models) {
    const columnMapping = {
      foreignKey: 'typeId',
      through: 'UserInterestSizes',
      otherKey: 'userId'
    };
    BikeType.belongsToMany(models.User, columnMapping);
    BikeType.hasMany(models.Listing, {foreignKey: "typeId"})
  };
  return BikeType;
};