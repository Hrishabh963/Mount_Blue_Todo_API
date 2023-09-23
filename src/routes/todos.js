const { todoTable } = require('../sequelize/models');
const validator = require('../middlewares/yupValidator');
const router = require('express').Router();

//To fetch all todos
router.get('/', async(req, res, next) => {
    try {
        const todos = await todoTable.findAll();
        if (todos === undefined) {
            const error = new Error('Error Fetching data');
            error.status = 500;
            throw error;
        }
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
});

//To add a new todo
router.post('/', validator, async(req, res, next) => {
    const todo = req.body;
    try {
        const todoSaved = await todoTable.create(todo);
        res.status(201).json(todoSaved);
    } catch (error) {
        next(error);
    }
});

//To get the todo with matching id
router.get('/:id', async(req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error('Parameter passed is not a number');
        }
        const todo = await todoTable.findByPk(id);
        if (!todo) {
            const error = new Error('Id not found');
            error.status = 404;
            throw error;
        }
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
});

//To update the todo with matching id
router.put('/:id', validator, async(req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error('Id is not a number');
        }

        const todoToBeUpdated = req.body;

        const isPresent = await todoTable.findByPk(id);
        if (!isPresent) {
            const error = new Error('Id not found');
            error.status = 404;
            throw error;
        }
        await todoTable.update(todoToBeUpdated, {
            where: {
                id: id,
            },
        });
        const updatedTodo = await todoTable.findByPk(id);
        res.status(200).json(updatedTodo);
    } catch (error) {
        next(error);
    }
});

//Deletes the todo with specified id
router.delete('/:id', async(req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error('Id is not a number');
        }

        const isPresent = await todoTable.findByPk(id);
        if (!isPresent) {
            const error = new Error('Id not found');
            error.status = 404;
            throw error;
        }

        await todoTable.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json({
            message: `Todo with id ${id} deleted successfully`,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;