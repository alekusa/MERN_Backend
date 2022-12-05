import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI = process.env.URI_DB;
export const PORT = process.env.PORT || 3000;