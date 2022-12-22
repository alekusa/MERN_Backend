import mongoose from "mongoose";
//importando las config / variable de coneccion a mongo db
import { MONGODB_URI } from "../server/config.js";

export async function connect_mongodb() {
  const db = await mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("connection at MONGOSE successfully");
      } else {
        console.log(err);
      }
    }
  );
}
