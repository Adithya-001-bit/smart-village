// Import mongoose
const mongoose = require('mongoose');

// Create the schema
const HealthCampSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Export the schema and create the collection in MongoDB
module.exports = mongoose.model('HealthCamp', HealthCampSchema);
