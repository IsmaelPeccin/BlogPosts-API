'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postsCategories = queryInterface.createTable('PostsCategories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      categorie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories')
  }
};
