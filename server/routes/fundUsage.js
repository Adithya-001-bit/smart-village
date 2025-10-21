const express = require('express');
const router = express.Router();
const FundUsage = require('../models/FundUsage');

// Get all fund usages
router.get('/', async (req, res) => {
  try {
    const records = await FundUsage.find().sort({ date: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new fund usage record
router.post('/', async (req, res) => {
  const { amount, description, proofUrl, date, updatedBy } = req.body;
  const record = new FundUsage({ amount, description, proofUrl, date, updatedBy });
  try {
    const saved = await record.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
