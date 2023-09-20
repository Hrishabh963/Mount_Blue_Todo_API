const { DataTypes } = require('sequelize');
const sequelize = require('./client');
const todoTable = sequelize.define(
  'todo',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'Todo',
    timestamps: false,
  },
);
module.exports = { todoTable };
