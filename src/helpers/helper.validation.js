const Joi = require('joi');

class Validation {
  static async registerUser(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      phone: Joi.string().required(),
      password: Joi.string().min(8).required(),
      address: Joi.string().required()
    });

    return schema.validate(data);
  }

  static async loginUser(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    });

    return schema.validate(data);
  }
}

module.exports = Validation;
