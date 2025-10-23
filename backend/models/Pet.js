import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    petId: { type: String, required: true, unique: true },
    name: String,
    species: String,
    breed: String,
    age: Number,
    ownerName: String,
    contactNumber: String
});

export default mongoose.model("Pet", petSchema);
