
# Todo API

This is a simple Express.js-based RESTful API for managing todo items. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on todo items.


## Installation

Install Todo API with following steps
1.  Clone the git repository

```bash
  git clone https://github.com/Hrishabh963/Mount_Blue_Todo_API.git
  cd Mount_Blue_Todo_API
```
2. Install node modules
```bash
npm install
```    

## Setting Up Environment Variables

Before running this application, you need to set up the necessary environment variables to configure your database connection and other configurations. Follow these steps to set up environment variables:

1. Create a `.env` file in the root directory of your project if it doesn't already exist.

2. Open the `.env` file using a text editor of your choice.

3. Define the following environment variables in the `.env` file:

### .env Configuration

- PORT=your_port_to_run_the_api
- USER=your_postgres_username
- PASSWORD=your_postgres_user_password
- DATABASE=your_database_name
- HOST=your_host_address
- DIALECT=your_database_type (example:- postgres,mysql,mssql,etc)
**Note:** Ensure that you keep your `.env` file secure and do not commit it to version control systems like Git, as it may contain sensitive information like database credentials.

# Starting the server
```bash
node src/server.js
```

# API Endpoints

Fetch all todos

    URL: /todos
    Method: GET
    Description: Get a list of all todo items.
Add a new todo

    URL: /todos
    Method: POST
    Description: Add a new todo item.

Get a todo by ID

    URL: /todos/:id
    Method: GET
    Description: Get a todo item by its ID.
Update a todo by ID

    URL: /todos/:id
    Method: PUT
    Description: Update a todo item by its ID.
Delete a todo by ID

    URL: /todos/:id
    Method: DELETE
    Description: Delete a todo item by its ID.
## Key Features

### Sequelize Integration

- **Database Management:** This API seamlessly integrates Sequelize, a powerful Node.js ORM, to manage your database operations. You can easily perform CRUD operations on your todo items with Sequelize models and queries.

### Yup Validation

- **Data Validation:** We've implemented data validation using Yup, a schema validation library. This ensures that incoming data is validated according to predefined rules before processing, improving data integrity and security.

### Express.js Framework

- **Fast and Minimalist:** This API is built on Express.js, a fast and minimalist web framework for Node.js. It provides a robust foundation for building RESTful APIs with a focus on performance and simplicity.

- **Routing:** Express.js facilitates clear and organized routing for handling various HTTP requests. Each API endpoint is well-defined, making it easy to understand and extend.

- **Error Handling:** Express.js middleware is used for error handling, providing consistent error responses and improving the overall reliability of the API.

- **Scalability:** Express.js allows for easy scalability, so you can expand your API to handle increased traffic and functionality as your project grows.