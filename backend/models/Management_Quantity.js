import Sequelize from 'sequelize';
import database from '../database/db.js';
import Products from './Products.js';

const Management_Quantity = database.define(
  'management_quantity',
  {
    id: {
      // Sequelize module has INTEGER Data_Type.
      type: Sequelize.INTEGER,
      // Sequelize module has INTEGER Data_Type.
      autoIncrement: true,
      // user_id can not be null.
      allowNull: false,
      // For uniquely identify user.
      primaryKey: true,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['product_id'],
      },
    ],
  }
);

Management_Quantity.belongsTo(Products, { foreignKey: 'product_id' });

export default Management_Quantity;
