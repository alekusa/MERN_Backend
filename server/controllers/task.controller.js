import { Task } from "../models/Task.model.js";

export const getTasks = async (req, res) => {
  try {
    const newTask = await Task.findAll();
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    await Task.create({ name });
    console.log(req.body);
    res.send("Creando Task");
  } catch (error) {
    return res.status(500).jason({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.send(`la tarea con id ${id} Fue Borrada`);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.findOne({
      where: {
        id,
      },
    });
    if (!result) return res.status(500).json({ message: "NO existe tarea" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await Task.update(
      {
        name: name,
      },
      {
        where: { id },
      }
    );
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
