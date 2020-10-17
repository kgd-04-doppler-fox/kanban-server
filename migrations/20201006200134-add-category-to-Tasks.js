'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Tasks', // name of Source model
      'category', // name of the key we're adding 
      Sequelize.STRING,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Tasks', // name of Source model
      'category',
      {}
    )
  }
};
