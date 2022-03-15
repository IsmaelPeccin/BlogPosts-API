'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const blogPosts = queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      published:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated: {
        type: Sequelize.STRING,
        allowNull: false,
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('BlogPosts')
  }
};
