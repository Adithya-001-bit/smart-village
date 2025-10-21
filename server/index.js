//import modules 
require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const healthCampRoutes = require('./routes/healthCamp');
const issueRoutes = require('./routes/issue');
const fundUsageRoutes = require('./routes/fundUsage');
const notificationRoutes = require('./routes/notification');
const stockItemRoutes = require('./routes/stockItem');
const waterAlertRoutes = require('./routes/waterAlert');



//create the expresss appp
const app = express();
app.use(cors());
app.use(express.json());

//connect to database 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(()=>console.log("MongoDB is connected !!"))
.catch((error)=>console.log("Error detected ",error));


//check whthere the server is running using route 
app.use('/api/issues', issueRoutes);
app.use('/api/healthcamps', healthCampRoutes);
app.use('/api/fundusages', fundUsageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/stockitems', stockItemRoutes);
app.use('/api/wateralerts', waterAlertRoutes);
app.use('/',(req,res)=>{
    res.send("Backend is running !!");
});


//port design 
const PORT = process.env.PORT || 5000
 app.listen(PORT,()=>console.log("App is lisetening on port no :",PORT));



