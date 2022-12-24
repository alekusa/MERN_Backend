import { Sequelize } from "sequelize";
import { db_name_mysql, PASS, USER } from "../server/config.js";

export const sequelize = new Sequelize(db_name_mysql, USER, PASS, {
  host: "us-east.connect.psdb.cloud",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
});

export async function connect_mysql() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export async function CrearTablas() {
  try {
    await sequelize.sync({ force: false });
    console.log("Create/Modifi tables successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
