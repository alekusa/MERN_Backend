import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        //es requerido si o si
        require: true,
        // quita los espacios
        trim: true
    },
    description: {
        type: String,
        //es requerido si o si
        require: true,
        // quita los espacios
        trim: true
    },
    image: {
        url: String,
        public_id: String
    }
});

export default mongoose.model('Post', postSchema);