const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route to get all tasks
router.get('/tasks', taskController.getAllTasks);

// Route to create a new task
router.post('/tasks', taskController.createTask);

// Route to update a task
router.put('/tasks/:id', taskController.updateTask);

// Route to delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;