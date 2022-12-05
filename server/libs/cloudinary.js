import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "devverudd",
  api_key: "454899939774814",
  api_secret: "OJ7k06cyuTeioWg4o90mKUGPATg",
});
export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
