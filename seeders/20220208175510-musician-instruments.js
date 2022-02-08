'use strict';

const { Musician, Instrument } = require('../models');
const { Op } = require('sequelize');

const musicianInstruments = [
  {
    musician: { firstName: 'Adam', lastName: 'Appleby' },
    instruments: [{ name: 'piano' }, { name: 'guitar' }]
  },
  {
    musician: { firstName: 'Anton', lastName: 'Martinovic' },
    instruments: [{ name: 'piano' }, { name: 'bass' }]
  },
  {
    musician: { firstName: 'Wilson', lastName: 'Holt' },
    instruments: [{ name: 'cello' }]
  },
  {
    musician: { firstName: 'Marine', lastName: 'Sweet' },
    instruments: [{ name: 'saxophone' }]
  },
  {
    musician: { firstName: 'Georgette', lastName: 'Kubo' },
    instruments: [{ name: 'drums' }, { name: 'trumpet' }, { name: 'saxophone' }]
  },
  {
    musician: { firstName: 'Aurora', lastName: 'Hase' },
    instruments: [{ name: 'violin' }, { name: 'cello' }]
  },
  {
    musician: { firstName: 'Trenton', lastName: 'Lesley' },
    instruments: [{ name: 'piano' }]
  },
  {
    musician: { firstName: 'Camila', lastName: 'Nenci' },
    instruments: [{ name: 'piano' }]
  },
  {
    musician: { firstName: 'Rosemarie', lastName: 'Affini' },
    instruments: [{ name: 'piano' }, { name: 'violin' }]
  },
  {
    musician: { firstName: 'Victoria', lastName: 'Cremonesi' },
    instruments: [{ name: 'violin' }]
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < musicianInstruments.length; i++) {
      const data = musicianInstruments[i];
      const musician =  await Musician.findOne({ where: data.musician });
      const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });
      await musician.addInstruments(instruments);
    }
  },

  down: async (queryInterface, Sequelize) => {
    for(let i = 0; i < musicianInstruments.length; i++) {
      const data = musicianInstruments[i];
      const musician =  await Musician.findOne({ where: data.musician });
      const instruments = await Instrument.findAll({ where: { [Op.or]: data.instruments } });
      await musician.removeInstruments(instruments);
    }
  }
};