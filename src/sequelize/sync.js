const sequelize = require('./client');

const sync = async (req, res, next) => {
  try {
    await sequelize.sync();
    console.log(`All tables synchronised`);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = sync;
