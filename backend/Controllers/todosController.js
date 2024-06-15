const Todo = require('../Models/todosSchema')


const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.send(todos)
}

const saveTodos = async (req, res) => {
    try {
        const {name} = req.body;
        const newTodo = new Todo({name});
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('error saving task');
    }
}

const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { name }, { new: true});
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('error updating task');
    }
}

const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).send('task deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('error deleting task');
    }
}


module.exports = {getTodos, saveTodos, updateTodos, deleteTodos}