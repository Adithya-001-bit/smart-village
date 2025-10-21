// import the required modules and HealthCamp schema

const express = require('express')
const router = express.Router();
const Healthcamp = require('../models/HealthCamp');


// router 1 : fetching all health camps 
router.get('/',async(req,res)=>{
    try{
        const camps = await Healthcamp.find().sort({date:1});
        res.json(camps);

    }
    catch(err){
        res.status(500).json({message:err.message})

    }
});

// router 2 : add new health camps 
router.post('/',async(req,res)=>
{
  
        const {title,description,date,location} = req.body;
        const camp = new Healthcamp({ title, description, date, location });
        try{
            const newcamp = await  camp.save();
            res.status(201).json(newcamp)

        }
        catch(err){
            res.status(400).json({message:err.message})
        }

    
});
module.exports=router;