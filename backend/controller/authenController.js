import md5 from 'md5';
import { loginService, createAccService, generateAccessToken } from '../service/authenService.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(req.body.password);
    const result = await loginService(email, password);
    if (result && !result.message)
      return res.json({
        result: true,
        data: {
          ...result,
        },
      });
    else
      return res.json({
        result: false,
        message: reqult.message,
      });
  } catch (error) {
    console.log('error', error);
    return res.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};

export const createAccount = async (req, res) => {
  try {
    console.log("controller");
    const email = req.body.email;
    const password = md5(req.body.password);
    const role = req.body.role;
    console.log("email", email);
    console.log("password", password);
    console.log("role", role);
    const result = await createAccService(email, password, role);
    if (result) {
      if (typeof result === 'object') {
        return res.json({
          result: false,
          message: result.message,
        });
      }
      return res.json({
        result: true,
      });
    } else {
      throw Error();
    }
  } catch (error) {
    console.log('error', error);
    return res.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};

export const getAccessToken = async (req, res) => {
  try {
    console.log(req.headers);
    const refreshToken = req.headers['refresh-token'];
    try {
      const decoded = jwt.verify(refreshToken, process.env.PRIVATE_KEY_GENERATE_REFRESH_TOKEN);
      const access_token = await generateAccessToken(decoded.email);
      if (!access_token) throw Error();
      return res.json({
        result: true,
        access_token,
      });
    } catch (err) {
      if (err.message === 'jwt expired')
        return res.json({
          result: false,
          message: 'Refresh Token Het Han',
          code: 'E015',
        });
    }
  } catch (error) {
    console.log('error', error);
    return res.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};
