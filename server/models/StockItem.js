const mongoose = require('mongoose');

const StockItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true }, // urea, seeds, fertilizer, etc.
  quantity: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StockItem', StockItemSchema);
