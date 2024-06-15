const {Router} = require('express')
const router = Router();
const { getTodos, saveTodos, updateTodos, deleteTodos} = require('../Controllers/todosController')

router.get('/get', getTodos);
router.post('/save', saveTodos)
router.put('/update/:id', updateTodos)
router.delete('/delete/:id', deleteTodos)
module.exports = router;