import Accounts from '../models/Accounts.js';
import Products from '../models/Products.js';
import Sequelize from 'sequelize';
import database from '../database/db.js';
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

export const addProduct = async (body) => {
  await database.transaction(async (t) => {
    const checkAdd = await Products.create({ ...body });
    if (!checkAdd) {
      t.rollback();
      return false;
    } else {
      t.commit();
      return true;
    }
  });
};

export const updateProduct = async (body) => {
  await database.transaction(async (t) => {
    const findProduct = Products.findOne({
      where: {
        id: body.id,
      },
    });
    if (!findProduct) return false;
    else {
      const checkRemove = await Products.update({ ...body }, { where: { id: body.id } });
      if (!checkRemove) {
        t.rollback();
        return false;
      } else {
        t.commit();
        return true;
      }
    }
  });
};

export const removeProduct = async (id) => {
  await database.transaction(async (t) => {
    const findProduct = Products.findOne({
      where: {
        id,
      },
    });
    if (!findProduct) return false;
    else {
      const checkRemove = await Products.destroy({ id });
      if (!checkRemove) {
        t.rollback();
        return false;
      } else {
        t.commit();
        return true;
      }
    }
  });
};
