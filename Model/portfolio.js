const mongoose = require("mongoose");

//create a scheema 
const PortFolioScheema = new mongoose.Schema
({
  name:{
    type:String,
  },
  email:{
    type:String,
  },
  message:{
    type:String,
  },
},{timestamp:true});

//Create PortFolio Model where we insert data
const user = mongoose.model('PortFolio',PortFolioScheema);

//Export model
module.exports = user;