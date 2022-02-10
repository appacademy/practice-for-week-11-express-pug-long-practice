'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    type: {
      type: DataTypes.ENUM(
        'strings',
        'woodwind',
        'brass',
        'percussion', 
        'keyboards',
        'other'
      ),
      allowNull: false,
    },
    // For your convenience in the Challenge Phase:
    numMusicians: DataTypes.VIRTUAL
  }, {});
  Instrument.associate = function(models) {
    // associations can be defined here
    Instrument.hasMany(models.MusicianInstrument, {
      foreignKey: 'instrumentId'
    });
    Instrument.belongsToMany(models.Musician, {
      through: models.MusicianInstrument,
      foreignKey: 'instrumentId',
      otherKey: 'musicianId',
    });

    // Optional to use in the Challenge Phase:
    Instrument.hasMany(models.MusicianInstrument, {
      as: 'AggregateMusicianInstruments',
      foreignKey: 'instrumentId'
    });
    Instrument.belongsToMany(models.Musician, {
      as: 'AggregateMusicians',
      through: models.MusicianInstrument,
      foreignKey: 'instrumentId',
      otherKey: 'musicianId',
    });
  };
  return Instrument;
};