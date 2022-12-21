import { v2 as cloudinary } from "cloudinary";
import { api_key, api_secret, cloud_name } from "../config.js";
//coneccion a cludinary
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});
//exporta la funcion de subir img a cludinary
export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};
//exporta la funcion para eliminar img de cludinary
export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
