const express = require('express');
const { fetchPets } = require('../services/petService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const pets = await fetchPets();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pets" });
    }
});

module.exports = router;