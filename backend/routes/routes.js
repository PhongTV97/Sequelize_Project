import express from 'express';
let router = express.Router();
import { login, createAccount, getAccessToken } from '../controller/authenController.js';
import { getListProduct, onAddProduct, onRemoveProduct, onUpdateProduct } from '../controller/productController.js';
import { onUploadImage } from '../controller/imageController.js';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//always check
router.use((req, res, next) => {
  const apiLogin = ['/login', '/create-account', '/get-access-token', '/upload-image'];
  const index = apiLogin.findIndex((item) => item === req.url);
  if (index === -1) {
    const access_token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(access_token, process.env.PRIVATE_KEY_GENERATE_ACCESS_TOKEN);
      req.email = decoded.email;
      next();
    } catch (err) {
      if (err.message === 'jwt expired')
        return res.status(500).json({
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
router.get('/get-access-token', getAccessToken);
router.get('/products', getListProduct);
router.post('/add-products', onAddProduct);
router.put('/products', onUpdateProduct);
router.delete('/products', onRemoveProduct);

var upload = multer({ dest: './public/data/uploads/' });

// router.post('/upload-image', upload.single('image'), onUploadImage);
router.post('/upload-image', upload.array('images'), onUploadImage);

// bodyParser, the library you use to parse your request from the server,
// doesn't parse files, you need to use another library,
// (multer is very good and easy). So first :
export default router;
