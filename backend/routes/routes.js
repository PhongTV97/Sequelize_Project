import express from 'express';
let router = express.Router();
import { login, createAccount, getAccessToken } from '../controller/authenController.js';
import { getListProduct } from '../controller/productController.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//always check
router.use((req, res, next) => {
  const apiLogin = ['/login', '/create-account', '/get-access-token'];
  const index = apiLogin.findIndex((item) => item === req.url);
  if (index === -1) {
    const access_token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(access_token, process.env.PRIVATE_KEY_GENERATE_ACCESS_TOKEN);
      req.email = decoded.email;
      next();
    } catch (err) {
      if (err.message === 'jwt expired')
        return res.json({
          result: false,
          message: 'Token Het Han',
          code: 'E014',
        });
    }
  } else {
    next();
  }
});

router.post('/login', login);
router.post('/create-account', createAccount);
router.get('/products', getListProduct);
router.get('/get-access-token', getAccessToken);

export default router;
