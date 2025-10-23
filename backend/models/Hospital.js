import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String
});

export default mongoose.model("Hospital", hospitalSchema);
