'use strict';
module.exports = (sequelize, DataTypes) => {
  const MusicianInstrument = sequelize.define('MusicianInstrument', {
    musicianId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  }, {});
  MusicianInstrument.associate = function(models) {
    // associations can be defined here
    MusicianInstrument.belongsTo(models.Musician, {
      foreignKey: 'musicianId'
    });
    MusicianInstrument.belongsTo(models.Instrument, {
      foreignKey: 'instrumentId'
    });
  };
  return MusicianInstrument;
};