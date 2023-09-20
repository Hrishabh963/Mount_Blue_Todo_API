const yup = require('yup');
const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean().required(),
});
module.exports = todoSchema;
