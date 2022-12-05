import express from "express";
import postsRouters from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";

const app = express();
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
