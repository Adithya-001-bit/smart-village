const express = require('express');
const router = express.Router();
const FundUsage = require('../models/FundUsage');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');


router.post('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const record = new FundUsage(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Any logged-in user can view fund usage
router.get('/', authenticateToken, async (req, res) => {
  try {
    const records = await FundUsage.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
