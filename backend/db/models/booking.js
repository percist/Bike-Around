'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    startDay: {
      allowNull: false,
      type:  DataTypes.DATE,
    },
    endDay: {
      allowNull: false,
      type:  DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type:  DataTypes.STRING(15),
    },
    duration: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};