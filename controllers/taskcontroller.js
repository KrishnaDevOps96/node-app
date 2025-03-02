const tasks = [];

// Get all tasks
exports.getTasks = (req, res) => {
    res.status(200).json(tasks);
};

// Create a new task
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const newTask = { id: tasks.length + 1, title, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update a task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;
    res.status(200).json(task);
};

// Delete a task
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};