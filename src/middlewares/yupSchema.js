const yup = require('yup');
const todoSchema = yup.object({
  text: yup.string().required(),
  isCompleted: yup.boolean().required(),
});
module.exports = todoSchema;
