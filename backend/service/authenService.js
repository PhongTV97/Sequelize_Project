import Accounts from '../models/Accounts.js';
import Sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
let Op = Sequelize.Op;

export const loginService = async (email, password) => {
  const findAccByEmailAndEmail = await Accounts.findAll({
    where: {
      email: {
        [Op.eq]: email,
      },
      pass_word: {
        [Op.eq]: password,
      },
    },
  });
  if (findAccByEmailAndEmail.length) {
    const gererateAccessToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + Number(process.env.EXPRIED_ACCESS_TOKEN),
        email,
      },
      process.env.PRIVATE_KEY_GENERATE_ACCESS_TOKEN
    );
    const gererateRefreshToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + Number(process.env.EXPRIED_REFRESH_TOKEN),
        email,
      },
      process.env.PRIVATE_KEY_GENERATE_REFRESH_TOKEN
    );

    const check = await Accounts.update(
      {
        access_token: gererateAccessToken,
        create_time_access_token: Date.now(),
        expried_time_access_token: Number(process.env.EXPRIED_ACCESS_TOKEN),

        refresh_token: gererateRefreshToken,
        create_time_refresh_token: Date.now(),
        expried_time_refresh_token: Number(process.env.EXPRIED_REFRESH_TOKEN),
      },
      {
        where: {
          email: {
            [Op.eq]: email,
          },
          pass_word: {
            [Op.eq]: password,
          },
        },
      }
    );
    if (check) {
      return {
        email,
        access_token: gererateAccessToken,
        refresh_token: gererateRefreshToken,
      };
    }
    return false;
  } else {
    return {
      message: 'Email hoac password sai, Vui long kiem tra lai!',
    };
  }
};

export const createAccService = async (email, password, role) => {
  const findAccByEmail = await Accounts.findAll({
    where: {
      email: {
        [Op.eq]: email,
      },
    },
  });
  if (findAccByEmail.length) {
    return {
      message: 'Email da ton tai, vui long su dung email khac!',
    };
  } else {
    const res = await Accounts.create({
      email,
      pass_word: password,
      role,
    });
    console.log('res', res);
    if (res) {
      return true;
    }
  }
  return false;
};
