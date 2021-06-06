import md5 from 'md5';
import { loginService, createAccService } from '../service/authenService.js';

export const login = async (res, req) => {
  try {
    const email = res.body.email;
    const password = md5(res.body.password);
    const result = await loginService(email, password);
    if (result && !result.message)
      return req.json({
        result: true,
        data: {
          ...result,
        },
      });
    else
      return req.json({
        result: false,
        message: result.message,
      });
  } catch (error) {
    console.log('error', error);
    return req.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};

export const createAccount = async (res, req) => {
  try {
    const email = res.body.email;
    const password = md5(res.body.password);
    const role = res.body.role;
    const result = await createAccService(email, password, role);
    if (result) {
      if (typeof result === 'object') {
        return req.json({
          result: false,
          message: result.message,
        });
      }
      return req.json({
        result: true,
      });
    } else {
      throw Error('fail');
    }
  } catch (error) {
    console.log('error', error);
    return req.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};
