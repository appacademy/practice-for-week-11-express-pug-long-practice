'use strict';

const { Op } = require('sequelize');

const instruments = [
  { name: 'piano', type: 'keyboards' },
  { name: 'guitar', type: 'strings' },
  { name: 'drums', type: 'percussion' },
  { name: 'bass', type: 'strings' },
  { name: 'violin', type: 'strings' },
  { name: 'cello', type: 'strings' },
  { name: 'trumpet', type: 'brass' },
  { name: 'saxophone', type: 'woodwind' }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instruments', instruments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Instruments', { [Op.or]: instruments })
  }
};
