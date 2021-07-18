import cloudinary from '../config/cloudinary.config.js';

export const onUploadImage = async (req, res, next) => {
  try {
    let result = [];
    await Promise.all(
      req.files.map(async (item) => {
        const resultUpload = await cloudinary.uploader.upload(item.path, {
          upload_preset: 'products',
        });
        if (!resultUpload) return;
        result.push(resultUpload);
        return resultUpload;
      })
    ).then((res) => {
      const check = res.every((item) => item);
      if (!check) throw Error();
    });
    return res.status(200).json({ result: true, message: 'Upload successful!', data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Something went wrong!' });
  }
};
