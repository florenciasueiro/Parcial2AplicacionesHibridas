import Task from '../models/task.model.js';


export const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
};

export const createTask = async (req, res) => {
    const { title, description, date} = req.body
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const savedTask = await newTask.save()
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    const Task = await Task.findById(req.params.id)
    if(!Task) return res.status(404).json({ message: 'Task not found' })
    res.json(Task)
};

export const deleteTask = async (req, res) => {
    const Task = await Task.findByIdAndDelete(req.params.id)
    if(!Task) return res.status(404).json({ message: 'Task not found'})
    return res.sendStatus(204)
};

export const updateTask = async (req, res) => {
    const Task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if(!Task) return res.status(404).json({ message: 'Task not found'})
    res.json(Task)
};