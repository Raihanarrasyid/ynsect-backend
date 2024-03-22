const response = (res, status, message, data) => {
  return res.status(status).json({
    code: status,
    status: message,
    data: data
  });
};

module.exports = response;
