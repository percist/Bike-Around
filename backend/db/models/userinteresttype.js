'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInterestType = sequelize.define('UserInterestType', {
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    typeId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  UserInterestType.associate = function(models) {
    
  };
  return UserInterestType;
};