
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      },
    email: {
      type: DataTypes.STRING(256),
      unique: true,
      allowNull: false,
      },
    streetAddress1: {
      type: DataTypes.STRING(256),
      allowNull: false,
      },
    streetAddress2: {
      type: DataTypes.STRING(100),
      },
    city: {
      type: DataTypes.STRING(256),
      allowNull: false,
      },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false,
      },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: false,
      },
    phoneNumber: {
      type: DataTypes.STRING(30),
      allowNull: false,
      }, 
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      }
       
    }, {});
  User.associate = function(models) {
    const columnMapping1 = {
      foreignKey: 'userId',
      through: 'UserInterestSizes',
      otherKey: 'sizeId'
    };
    const columnMapping2 = {
      foreignKey: 'userId',
      through: 'UserInterestTypes',
      otherKey: 'typeId'
    };
    const columnMapping3 = {
      foreignKey: 'userId',
      through: 'UserProfilePictures',
      otherKey: 'profilePictureId'
    };
    User.belongsToMany(models.BikeSize, columnMapping1);
    User.belongsToMany(models.BikeType, columnMapping2);
    User.belongsToMany(models.Picture, columnMapping3);
  };
  return User;
};