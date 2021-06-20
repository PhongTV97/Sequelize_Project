import Accounts from '../models/Accounts.js';
import Products from '../models/Products.js';
import Sequelize from 'sequelize';
let Op = Sequelize.Op;

export const getAllProduct = async (email) => {
  if (email) {
    const findAccByEmail = await Accounts.findAll({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
    if (findAccByEmail.length) {
      const list = await Products.findAll();
      return list;
    }
  }
  return false;
};
