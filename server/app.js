import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
import imgRoutes from "./routes/img.routes.js";
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
app.use(adminRoutes, postRoutes, userRoutes, imgRoutes);

export default app;
