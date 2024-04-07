const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadMiddleware = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.image;

  if (file.size > 1024 * 1024) {
    return res.status(400).send('File size must be less than 1MB.');
  }

  if (!file.mimetype.startsWith('image')) {
    return res.status(400).send('File must be an image.');
  }

  try {
    await cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
      if (error) {
        console.error('Error uploading image:', error);
        return res.status(500).send('Error uploading image.');
      }

      req.body.image = result.secure_url;
      next();
    });
  } catch (error) {
    return res.status(500).send('Error uploading image.');
  }
};

module.exports = uploadMiddleware;
