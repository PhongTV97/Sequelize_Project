import Sequelize from 'sequelize';
import database from '../database/db.js';

import Employees from './Employees.js';
import Customers from './Customers.js';
import Products from './Products.js';

const Orders = database.define('orders', {
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
  customer_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  employee_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  total_asset: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  ship_to_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number_of_product: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Orders.belongsTo(Customers, { foreignKey: 'customer_id' });
Orders.belongsTo(Employees, { foreignKey: 'employee_id' });
Orders.hasMany(Products, { foreignKey: 'product_id' });

export default Orders;
