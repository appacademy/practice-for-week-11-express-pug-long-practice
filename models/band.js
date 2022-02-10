'use strict';
module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define('Band', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    yearFormed: DataTypes.INTEGER,
    // For your convenience in the Challenge Phase:
    numMusicians: DataTypes.VIRTUAL
  }, {});
  Band.associate = function(models) {
    // associations can be defined here
    Band.hasMany(models.Musician, { foreignKey: 'bandId' });

    // Optional to use in the Challenge Phase:
    Band.hasMany(models.Musician, { as: 'AggregateMusicians', foreignKey: 'bandId' });
  };
  return Band;
};