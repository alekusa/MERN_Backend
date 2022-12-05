// Importando la coneccion a la DB
import {dbConect} from './db.js';
//importando desde config.js el puerto guardado en .env
import { PORT } from './config.js';
//importando las rutas desde app
import app from './app.js';
// conectando a la db
dbConect();

app.listen(PORT)
console.log('Server in running port', PORT)