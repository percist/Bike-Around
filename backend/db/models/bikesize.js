'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeSize = sequelize.define('BikeSize', {
    name: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
  }, {});
  BikeSize.associate = function(models) {
    const columnMapping = {
      foreignKey: 'sizeId',
      through: 'UserInterestSizes',
      otherKey: 'userId'
    };
    BikeSize.belongsToMany(models.User, columnMapping);
  };
  return BikeSize;
};