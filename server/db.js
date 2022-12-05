import mongoose, { mongo } from "mongoose";
//importando las config / variable de coneccion a mongo db
import {MONGODB_URI} from './config.js';


export async function dbConect() {
    await mongoose.connect(
        MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, res) => {
            if(!err){
                console.log('Conect SUCCESSFUL');
            }else{
                console.log('Conect ERROR');
            }
        });
};