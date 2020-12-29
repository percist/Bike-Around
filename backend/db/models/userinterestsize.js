'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInterestSize = sequelize.define('UserInterestSize', {
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    sizeId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  UserInterestSize.associate = function(models) {
  };

  return UserInterestSize;
};