import dotenv from "dotenv";
dotenv.config();
// variables de entorno necesitan ser cargadas en el HOST
//URI_DB , api_key , api_secret
export const MONGODB_URI = process.env.URI_DB;
export const PORT = process.env.PORT || 3000;
export const cloud_name = "devverudd";
export const api_key = process.env.api_key;
export const api_secret = process.env.api_secret;
