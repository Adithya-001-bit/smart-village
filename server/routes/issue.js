//import modules 

const express = require('express')
const router = express.Router();
const Issue = require('../models/Issue');

// get all issues : true or false 

router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};
    if (status) filter.status = status;
    const issues = await Issue.find(filter).sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//post a new issue 

router.post("/",async(req,res)=>{
  const { title, description, photo, reporterName, reporterContact } = req.body;
  const issue = new Issue({ title, description, photo, reporterName, reporterContact });
  try{
    const newIssue = await issue.save();
    res.status(201).json(newIssue);

  }
  catch{
    res.status(400).json({message:err.message});
  }
});

//updates the issue 

router.patch('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });

    if (req.body.status) issue.status = req.body.status;
    const updatedIssue = await issue.save();
    res.json(updatedIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

