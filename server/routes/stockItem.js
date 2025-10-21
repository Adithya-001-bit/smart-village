const express = require('express');
const router = express.Router();
const StockItem = require('../models/StockItem');

// Get all stock items
router.get('/', async (req, res) => {
  try {
    const items = await StockItem.find().sort({ updatedAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update a stock item
router.post('/', async (req, res) => {
  const { itemName, quantity } = req.body;
  try {
    let item = await StockItem.findOne({ itemName });
    if (item) {
      item.quantity = quantity;
      item.updatedAt = Date.now();
      const updated = await item.save();
      res.json(updated);
    } else {
      item = new StockItem({ itemName, quantity });
      const saved = await item.save();
      res.status(201).json(saved);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
