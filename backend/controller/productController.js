import { getAllProduct } from '../service/productService.js';

export const getListProduct = async (req, res) => {
  try {
    const listProducts = await getAllProduct(req.email);
    if (!listProducts) throw Error();
    return res.json({
      result: true,
      data: {
        listProducts,
      },
    });
  } catch (error) {
    console.log('error', error);
    return res.json({
      result: false,
      message: 'Da co loi xay ra',
    });
  }
};
