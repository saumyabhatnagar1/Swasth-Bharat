const mongoose=require('mongoose');
const express=require('express');
const Quan=require('../models/bed-wheel.js');

const router=new express.Router();
router.post('/edit-details',async(req,res)=>{
    const new_quan=new Quan(req.body)
    try{
        await new_quan.save();
     
        res.send(new_quan);
    }
    catch(e)
    {
        res.status(400).send();
    }
})
router.post ('/bed-wheel-inc',async (req,res)=>{
    try{
        const quan=await Quan.findById('5e395863d6cf0b10e46bb5a2');
        quan.bed++;
        await quan.save();
        res.redirect('/bed-server')
    }
    catch(e)
    {
        res.status(400).send();
    }
})

router.post('/bed-wheel-dec',async (req,res)=>{
    try{
        const quan=await Quan.findById('5e395863d6cf0b10e46bb5a2');
        quan.bed--;
        await quan.save();
        res.redirect('/bed-server');

    }
    catch(e)
    {
        res.status(400).send(e);
    }
})
router.post('/wheel-inc',async(req,res)=>{
    try{
        const quan =await Quan.findById('5e395863d6cf0b10e46bb5a2');
        quan.wheelchair++;
        await quan.save();
        res.redirect('/bed-server')
    }
    catch(e)
    {
        res.send(e);
    }
})

router.post('/wheel-dec',async(req,res)=>{
    try{
        const quan =await Quan.findById('5e395863d6cf0b10e46bb5a2');
        quan.wheelchair--;
        await quan.save();
        res.redirect('/bed-server')
    }
    catch(e)
    {
        res.send(e);
    }
})
module.exports=router;  

