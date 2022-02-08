'use strict';

const { Op } = require('sequelize');

const bands = [
  { name: 'The Falling Box', yearFormed: 1999 },
  { name: 'America The Piano', yearFormed: 1934 },
  { name: 'Loved Autumn', yearFormed: 2012 },
  { name: 'Playin Sound', yearFormed: 1985 },
  { name: 'The King River', yearFormed: 1965 }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', bands)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bands', { [Op.or]: bands })
  }
};