//import the mongoose

const mongoose=require('mongoose')

//prepare the schema using mongoose
 
const IssueSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
  description: { type: String, required: true },
  photo: String,
  status: { type: String, default: 'open', enum: ['open', 'in-progress', 'closed'] },
  reporterName: String,
  reporterContact: String,
  createdAt: { type: Date, default: Date.now },
    }
);
module.exports= mongoose.model('Issue',IssueSchema);
