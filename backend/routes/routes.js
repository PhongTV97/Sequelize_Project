import express from 'express';
let router = express.Router();
import { login, createAccount } from '../controller/authenController.js';

//always check
router.use((res, req, next) => {
  const apiLogin = ['/login', '/createAccount'];
  const index = apiLogin.findIndex((item) => item === res.url);
  if (index === -1) {
    console.log('check token');
  } else {
    next();
  }
});

router.post('/login', login);
router.post('/create-account', createAccount);

export default router;
