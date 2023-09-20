const todoSchema = require('./yupSchema');

const validator = async (req, res, next) => {
  try {
    await todoSchema.validate(req.body);
    next();
  } catch (error) {
    const errorMessage = new Error(error.errors);
    next(errorMessage);
  }
};

module.exports = validator;
