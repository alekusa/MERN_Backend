import dotenv from 'dotenv'
dotenv.config()
//* variables de entorno necesitan ser cargadas en el HOST //
//* URI_DB , api_key , api_secret //
export const MONGODB_URI = process.env.URI_DB
//* coneccion a cloudinary  IMAGENES en cloud //
export const cloud_name = 'devverudd'
export const api_key = process.env.api_key
export const api_secret = process.env.api_secret
//* Puerto local o asignado por el host
export const PORT = process.env.PORT || 3000
//* coneccion a mysql -> sequelize -> //
//? Alojado en Planetscale.com //
export const USER = process.env.USER
export const db_name_mysql = process.env.db_name_mysql
export const PASS = process.env.PASS

//LLAMAR a configDb.js la primera vez para crear las tablas y sus datos
