import express from "express";
import postsRouters from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();
//uso de cors permite get de distintas url
app.use(cors());
//middleware
app.use(express.json());
//subida de archivos
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
//router
app.use(postsRouters);

export default app;
