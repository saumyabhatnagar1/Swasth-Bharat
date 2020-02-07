const mongoose=require('mongoose');
const myschema=new mongoose.Schema({
    doctor:{
        type:String
    },
    available:{
        type:String
    }
})
const Doctor=mongoose.model('Doctor',myschema);
module.exports=Doctor;