'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: {
      allowNull: false,
      type:  DataTypes.STRING(256),
    }
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
  };
  return Picture;
};