import { Project } from "../models/Project.model.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const crerateProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, priority } = req.body;
    // ## Metodo de Fazt, para update
    // const project = await Project.findByPk(id);
    // project.name = name;
    // project.description = description;
    // project.priority = priority;
    // await project.save();
    // res.json(project);
    await Project.update(
      {
        name,
        description,
        priority,
      },
      {
        where: {
          id,
        },
      }
    );
    const projects = await Project.findByPk(id);
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
