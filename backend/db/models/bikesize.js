'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeSize = sequelize.define('BikeSize', {
    name: {
      allowNull: false,
      type:  DataTypes.STRING(50),
    },
  }, {});
  BikeSize.associate = function(models) {
    // associations can be defined here
  };
  return BikeSize;
};