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
    // For your convenience in the Challenge Phase:
    numInstruments: DataTypes.VIRTUAL
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

    // Optional to use in the Challenge Phase:
    Musician.belongsToMany(models.Instrument, {
      as: 'AggregateInstruments',
      through: models.MusicianInstrument,
      foreignKey: 'musicianId',
      otherKey: 'instrumentId',
    });
  };
  return Musician;
};