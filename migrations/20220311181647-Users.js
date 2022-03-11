'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image:{
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
