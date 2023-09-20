const { todoTable } = require('../sequelize/models');
const validator = require('../middlewares/yupValidator');
const router = require('express').Router();

router.get('/', async(req, res, next) => {
    try {
        const todos = await todoTable.findAll();
        if (todos === undefined) {
            const error = new Error('Error Fetching data');
            throw error;
        } else {
            res.status(200).json(todos);
        }
    } catch (error) {
        next(error);
    }
});

router.post('/', validator, async(req, res, next) => {
    const todo = req.body;
    try {
        const todoSaved = await todoTable.create(todo);
        res.status(201).json(todoSaved);
    } catch (error) {
        next(error);
    }
});

module.exports = router;