const mongoose=require("mongoose")


const Company=mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    contactEmail:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("Company",Company)