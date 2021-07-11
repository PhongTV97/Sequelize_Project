import Sequelize from 'sequelize';
import database from '../database/db.js';
import Orders from './Orders.js';
import Products from './Products.js';

const OrdersDetail = database.define('order_detail', {
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
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  number_of_product: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

OrdersDetail.belongsTo(Orders, { foreignKey: 'order_id' });
OrdersDetail.hasMany(Products, { foreignKey: 'product_id' });

export default OrdersDetail;
