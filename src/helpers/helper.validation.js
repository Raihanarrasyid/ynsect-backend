const Joi = require('joi');

class Validation {
  static async registerUser(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      phone: Joi.string(),
      password: Joi.string().min(8).required(),
      address: Joi.string()
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

  static async toggleLike(data) {
    const schema = Joi.object({
      forumId: Joi.number().required(),
      userId: Joi.number().required()
    });

    return schema.validate(data);
  }

  static async createForum(data) {
    const schema = Joi.object({
      content: Joi.string().required(),
      userId: Joi.number().required()
    });

    return schema.validate(data);
  }

  static async addOneProductCart(data) {
    const schema = Joi.object({
      productId: Joi.number().required()
    });

    return schema.validate(data);
  }

  static async decreaseProductQuantity(data) {
    const schema = Joi.object({
      productId: Joi.number().required()
    });

    return schema.validate(data);
  }

  static async updateOrAddProductCart(data) {
    const schema = Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required()
    });

    return schema.validate(data);
  }
}

module.exports = Validation;
