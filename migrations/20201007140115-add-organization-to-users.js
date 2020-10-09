'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'organization', Sequelize.STRING );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'organtization', {} );
  }
};