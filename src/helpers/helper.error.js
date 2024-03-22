class ErrorHelper {
  static NotFoundError = (req, res, message) => {
    // Implement here
  };

  static InternalServerError = (req, res, message) => {
    return res.status(500).json({
      code: 500,
      status: 'error',
      message: message
    });
  };

  static BadRequestError = (req, res, message) => {
    // Implement here
  };

  static UnauthorizedError = (req, res, message) => {
    // Implement here
  };

  static ForbiddenError = (req, res, message) => {
    // Implement here
  };
}

export default ErrorHelper;