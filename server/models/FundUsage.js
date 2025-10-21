const mongoose = require('mongoose');

const FundUsageSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  proofUrl: String,
  date: { type: Date, required: true },
  updatedBy: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FundUsage', FundUsageSchema);
