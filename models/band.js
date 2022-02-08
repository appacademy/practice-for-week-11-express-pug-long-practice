'use strict';
module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define('Band', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    yearFormed: DataTypes.INTEGER
  }, {});
  Band.associate = function(models) {
    // associations can be defined here
    Band.hasMany(models.Musician, { foreignKey: 'bandId' });
  };
  return Band;
};