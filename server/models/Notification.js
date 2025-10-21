const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ['ration', 'pension'], required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'expired'], default: 'active' },
});

module.exports = mongoose.model('Notification', NotificationSchema);
