const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define(
    'Category',
    Attributes,
    {
      undescored: true, 
      timestamp: false,
      tableName: 'Categories',
    },
  );
  return Category;
};