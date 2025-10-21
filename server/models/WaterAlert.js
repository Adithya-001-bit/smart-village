const mongoose = require('mongoose');

const WaterAlertSchema = new mongoose.Schema({
  message: { type: String, required: true },
  scheduleTime: { type: String, required: true }, // e.g., '6:00 AM - 8:00 AM'
  day: { type: String }, // e.g., "Monday", "Tuesday"
  status: { type: String, enum: ['scheduled', 'done'], default: 'scheduled' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WaterAlert', WaterAlertSchema);
