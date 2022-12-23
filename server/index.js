// Importando la coneccion a la DB MONGO_DB
import { connect_mongodb } from "../db/db.mongo.js";
//Importando coneccion con DB MySql
import { connect_mysql, CrearTablas } from "../db/db.mysql.js";
//importando desde config.js el puerto guardado en .env
import { PORT } from "./config.js";

//importando las rutas desde app
import app from "./app.js";
// conectando a la DB MOGO
//connect_mongodb();

//conectando a la DB MYSQL
//IMportando los modelos de datos mysql
import "../server/models/Project.model.js";
import "../server/models/Task.model.js";
//funcion que genera y/o modifica las tablas en la DB
CrearTablas();
//pruebas de conectividad
//connect_mysql();

// comandos para porner el server en escucha
app.listen(PORT);
console.log("Server in running port", PORT);
