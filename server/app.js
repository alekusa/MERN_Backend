import express from "express";
//rutas
import adminRoutes from "./routes/admin.routes.js";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
import imgRoutes from "./routes/img.routes.js";
import projectRoutes from "./routes/poject.routes.js";
import taskRoutes from "./routes/task.routes.js";
import fileUpload from "express-fileupload";
//conecciones desde distintos navegadores
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
app.use(
  adminRoutes,
  postRoutes,
  userRoutes,
  imgRoutes,
  projectRoutes,
  taskRoutes
);

export default app;
