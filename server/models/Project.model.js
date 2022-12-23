import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.mysql.js";
import { Task } from "./Task.model.js";
// definimos la trabla proyecto

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});
