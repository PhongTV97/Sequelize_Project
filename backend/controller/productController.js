import { getAllProduct, addProduct, updateProduct, removeProduct } from '../service/productService.js';

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
    console.log(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
};

export const onAddProduct = async (req, res) => {
  try {
    const body = {};
    const result = await addProduct(body);
    if (!result) throw Error();
    return res.json({
      result: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
};

export const onUpdateProduct = async (req, res) => {
  try {
    const body = {};
    const result = await updateProduct(body);
    if (!result) throw Error();
    return res.json({
      result: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
};

export const onRemoveProduct = async (req, res) => {
  try {
    const id = 1;
    const result = await removeProduct(id);
    if (!result) throw Error();
    return res.json({
      result: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
};
