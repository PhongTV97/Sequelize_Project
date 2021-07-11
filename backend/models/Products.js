import Sequelize from 'sequelize';
import database from '../database/db.js';
import Supplies from './Supplies.js';

const Products = database.define('products', {
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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  supplies_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  expire_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Products.belongsTo(Supplies, { foreignKey: 'supplies_id' });

export default Products;
