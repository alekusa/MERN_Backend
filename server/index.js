// Importando la coneccion a la DB MONGO_DB
import { connect_mongodb } from '../db/db.mongo.js'
//Importando coneccion con DB MySql
import { connect_mysql, CrearTablas } from '../db/db.mysql.js'
//importando desde config.js el puerto guardado en .env
import { PORT } from './config/config.js'
//Importando coneccion con sqlite
import { db_seqlise_Conect } from '../db/db.sqlite.js'
//importando las rutas desde app
import app from './app.js'
//__conectando a la DB MOGO__//
//connect_mongodb();
//__conectar a la DB MYSQL__//
//__Importando los modelos de datos mysql__//
//import "../server/models/Project.model.js";
//import "../server/models/Task.model.js";
//__funcion que genera y/o modifica las tablas en la DB mysql__//
//CrearTablas();
//__Pruebas de conectividad__//
//connect_mysql();
//db_seqlise_Conect()

//ejecutar para insertar datos en tablas movie, ademas genera clave foranea movie genre
import dbconfig from './config/configDb.js'
const ejecutar = new dbconfig()
//ejecutar.conf()
// comandos para poner el server en escucha
app.listen(PORT)
console.log('Server in running port', PORT)
