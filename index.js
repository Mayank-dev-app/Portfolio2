const express = require("express");
require("dotenv").config();
require("./config/datbaseConfig");  //Database Connection
const user = require("./Model/portfolio"); //Model for contact

const app =express();

app.use(express.json());

app.use(express.static(""));

app.post("/api/contact", async (req,res)=>{
    try {
     const { name, email, message} = req.body;
     if(!name || !email || !message){
        return res.status(401).send({
            successs: false,
            message: 'Please Fill All Fields',
        });
     }
    
     const User = await user.create({name, email, message})
      User.save();
      return res.status(201).json({
        success: true,
        message: 'Your Information Send Successfully.'
      });
      
    }catch(err){
        console.log("The Error : ", err);
        return res.status(500).send({
            sucess: false,
            message: 'Internal Error - Server',
        });
    }      

})
const PORT = process.env.PORT;
app.listen(PORT, ()=>console.log(`Port is running On ${PORT}`));