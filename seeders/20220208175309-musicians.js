'use strict';

const { Op } = require('sequelize');
const { Band, Musician } = require('../models');

const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('hello')
    for(let bandInfo of bandMusicians){
      const { name, musicians } = bandInfo;
      const band = await Band.findOne({ where: { name } });
      for(let musician of musicians) {
        await band.createMusician(musician);
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    for(let bandIdx = 0; bandIdx < bandMusicians.length; bandIdx++){
      const { musicians } = bandMusicians[bandIdx];
      for(let musician of musicians) {
        await Musician.destroy({ where: musician });
      }
    }
  }
};