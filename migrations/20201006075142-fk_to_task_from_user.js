'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("Tasks", {
      fields: ["UserId"],
      type: "foreign key",
      name: "custom_fkey_UserId",
      references: { // required
        table: "Users",
        field: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint("Tasks", "custom_fkey_UserId")
  }
};
