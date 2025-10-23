import express from "express";
import MedicalRecord from "../models/MedicalRecord.js";

const router = express.Router();

// Add new medical record
router.post("/add", async (req, res) => {
    try {
        const record = new MedicalRecord(req.body);
        await record.save();
        res.status(201).json({ message: "Record added", record });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get medical history by petId
router.get("/pet/:petId", async (req, res) => {
    try {
        const records = await medicalrecords.find({ petId: req.params.petId });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default router;
