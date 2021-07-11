import Sequelize from 'sequelize';
import database from '../database/db.js';

const Customers = database.define('customers', {
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
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default Customers;
