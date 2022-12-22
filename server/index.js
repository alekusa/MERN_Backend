// Importando la coneccion a la DB MONGO_DB
import { connect_mongodb } from "../db/db.mongo.js";
//Importando coneccion con mysql DB
import { connect_mysql } from "../db/db.mysql.js";
//importando desde config.js el puerto guardado en .env
import { PORT } from "./config.js";

//importando las rutas desde app
import app from "./app.js";
// conectando a la db MOGO_DB
connect_mongodb();
//conectando MYSQL
connect_mysql();

// comandos para porner el server en escucha
app.listen(PORT);
console.log("Server in running port", PORT);
