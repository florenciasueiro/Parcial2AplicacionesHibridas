import Terreno from '../models/terreno.model.js';

export const getTerrenos = async (req, res) => {
    try {
        const tasks = await Terreno.find();
        res.json({date: new Date, productos: tasks});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas' });
    }
};

export const createTerreno = async (req, res) => {
    try {
        const { sku, nombre, descripcion, precio, stock } = req.body;
        const newTerreno = new Terreno({
            sku,
            nombre,
            descripcion,
            precio,
            stock
        });
        const savedTerreno = await newTerreno.save();
        res.json(savedTerreno);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el terreno' });
    }
};

export const getTerreno = async (req, res) => {
    try {
        const task = await Terreno.findById(req.params.id).populate('terreno');
        if (!task) return res.status(404).json({ message: 'Terreno not found' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea' });
    }
};

export const deleteTerreno = async (req, res) => {
    try {
        const task = await Terreno.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Terreno not found' });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
};

export const updateTerreno = async (req, res) => {
    try {
        const { title, description, date, terrenoId } = req.body;
        const updatedTerreno = await Terreno.findByIdAndUpdate(
            req.params.id,
            { title, description, date, terreno: terrenoId },
            { new: true }
        ).populate('terreno');
        if (!updatedTerreno) return res.status(404).json({ message: 'Terreno not found' });
        res.json(updatedTerreno);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};
