import Sequelize from 'sequelize';
import database from '../database/db.js';

const Accounts = database.define(
  'accounts',
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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pass_word: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    access_token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    create_time_access_token: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    expried_time_access_token: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    refresh_token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    create_time_refresh_token: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    expried_time_refresh_token: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email'],
      },
    ],
  }
);

export default Accounts;
