const express = require('express');
const sequelize = require('./sequelize/client');
const app = express();
const {
  errorLogger,
  errorResponder,
  errorPath,
} = require('./middlewares/errorHandler');
const todoRouter = require('./routes/todos');
require('dotenv').config();
app.use(express.json());
const server = async () => {
  try {
    //Establish Database connection
    console.log(`Testing connection`);
    await sequelize.authenticate();
    console.log(`Connected Successfully`);

    //Set Route
    app.use('/todos', todoRouter);

    //Error handlers
    app.use(errorLogger);
    app.use(errorResponder);
    app.use(errorPath);
    const port = process.env.PORT || 5500;
    app.listen(port, (error) => {
      if (error) {
        throw error;
      } else console.log(`Listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

server();