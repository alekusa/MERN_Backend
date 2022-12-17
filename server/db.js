import mongoose from "mongoose";
//importando las config / variable de coneccion a mongo db
import { MONGODB_URI } from "./config.js";

export async function dbConect() {
  const db = await mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("connect successfully");
      } else {
        console.log(err);
      }
    }
  );
}
