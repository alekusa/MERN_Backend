// Importando la coneccion a la DB MONGO_DB
import { dbConect } from "./db.js";
//importando desde config.js el puerto guardado en .env
import { PORT } from "./config.js";
//importando las rutas desde app
import app from "./app.js";
// conectando a la db MOGO_DB
dbConect();
// comandos para porner el server en escucha
app.listen(PORT);
console.log("Server in running port", PORT);
