import express from "express";
import Pet from "../models/Pet.js";

const router = express.Router();

// Add new pet
router.post("/add", async (req, res) => {
    try {
        const newPet = new Pet(req.body);
        await newPet.save();
        res.status(201).json({ message: "Pet added successfully", pet: newPet });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get pet details by petId
router.get("/:petId", async (req, res) => {
    try {
        console.log("enterd in route");

        // const pet = await Pet.findById(req.params.petId);
        const pet = await Pet.findOne({ petId: req.params.petId })
        if (!pet) return res.status(404).json({ message: "Pet not found" });
        console.log(pet);

        res.json(pet);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
