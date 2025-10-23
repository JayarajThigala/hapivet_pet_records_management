import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    petId: { type: String, required: true },
    hospitalId: String,
    visitDate: { type: Date, default: Date.now },
    symptoms: String,
    diagnosis: String,
    treatment: String,
    doctor: String
});

export default mongoose.model("MedicalRecord", medicalRecordSchema);
