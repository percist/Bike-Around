'use strict';
module.exports = (sequelize, DataTypes) => {
  const BikeRating = sequelize.define('BikeRating', {
    bookingId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    review: {
      allowNull: false,
      type:  DataTypes.TEXT,
    },
    stars: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  BikeRating.associate = function(models) {
    BikeRating.belongsTo(models.Booking, {foreignKey: 'bookingId'});
    BikeRating.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return BikeRating;
};