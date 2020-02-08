const mongoose=require('mongoose');
const express=require('express');
const Doctor=require('../models/doctor.js');

const router=new express.Router();

router.post('/doctors-change-no/:id',async (req,res)=>{
    
    try{
        const doctor=await Doctor.findById(req.params.id)
    
        doctor.available='no'
        await doctor.save();
        res.redirect('/doctor')
        
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})


router.post('/doctors-change-yes/:id',async (req,res)=>{
    
    try{
        const doctor=await Doctor.findById(req.params.id)
        doctor.available='yes'
        await doctor.save();
       res.redirect('/doctor')
      
      
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})
module.exports=router