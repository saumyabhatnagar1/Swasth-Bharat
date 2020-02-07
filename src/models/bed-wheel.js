const mongoose=require('mongoose');
const myschema=new mongoose.Schema({
    bed:{
        type:Number,

    },
    wheelchair:{
        type:Number,
    }
})

const Quan=mongoose.model('Quan',myschema)
module.exports=Quan;