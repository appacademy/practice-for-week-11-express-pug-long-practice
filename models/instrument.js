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
    }
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
  };
  return Instrument;
};