'use strict';
module.exports = (sequelize, DataTypes) => {
  const Musician = sequelize.define('Musician', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandId: DataTypes.INTEGER,
  }, {});
  Musician.associate = function(models) {
    // associations can be defined here
    Musician.belongsTo(models.Band, {
      foreignKey: 'bandId',
      onDelete: 'SET NULL'
    })
    Musician.hasMany(models.MusicianInstrument, {
      foreignKey: 'musicianId'
    });
    Musician.belongsToMany(models.Instrument, {
      through: models.MusicianInstrument,
      foreignKey: 'musicianId',
      otherKey: 'instrumentId',
    });
  };
  return Musician;
};