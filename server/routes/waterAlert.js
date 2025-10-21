const express = require('express');
const router = express.Router();
const WaterAlert = require('../models/WaterAlert');

// Get all water alerts
router.get('/', async (req, res) => {
  try {
    const alerts = await WaterAlert.find().sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a water alert
router.post('/', async (req, res) => {
  const { message, scheduleTime, day, status } = req.body;
  const alert = new WaterAlert({ message, scheduleTime, day, status });
  try {
    const saved = await alert.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
