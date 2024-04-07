const jwt = require('jsonwebtoken');
const response = require('./helper.error');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRED_TIME });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const authCheck = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return response.Unauthorized(res, res, 'Unauthorized');
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return response.Unauthorized(req, res, 'Unauthorized');
  }
};

module.exports = {
  generateToken,
  verifyToken,
  authCheck
};
