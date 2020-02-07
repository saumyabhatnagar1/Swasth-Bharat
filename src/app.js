const express=require('express');
const newrouter=require('../src/routers/bed-wheel.js')
const app=express();
const path=require('path');
const hbs=require('hbs');
const multer=require('multer');

const storage =multer.diskStorage({destination:'./public/uploads/',
filename:function(req,file,callback){
callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))

}});

const upload=multer({
    storage:storage,
    

}).single('myimage');

const port=process.env.PORT ||3000;
require('./db/mongoose.js');
const mongodbClient=require('mongodb').MongoClient;
const Quan=require('../src/models/bed-wheel.js');
const Doctor=require('../src/models/doctor.js');
const doctorrouter=require('../src/routers/doctors.js')
app.use(doctorrouter);
app.use(newrouter);
app.use(express.json());


app.use(express.static(path.join(__dirname,'../public')))
const viewPath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialpath);
app.get('/chatbot',(req,res)=>{
    res.render('bed-wheel')
})


app.get('/view', async function(req, res){
    const doctor=await Doctor.findById('5e3b2559eeed0c45ec674a2f')
    console.log(doctor.available)
    res.render('misc',{users:doctor.available});
});




app.get('/doctor-client',async(req,res)=>{
    const doctor1=await Doctor.findById('5e3b2559eeed0c45ec674a2f')
    
    const doctor2=await Doctor.findById('5e3dc4bc4665293254cbe67a')
    const doctor3=await Doctor.findById('5e3dc4bc4665293254cbe679')
    const doctor4=await Doctor.findById('5e3dc4bc4665293254cbe67c')
    const doctor5=await Doctor.findById('5e3dc4bc4665293254cbe67b')
    const doctor6=await Doctor.findById('5e3dc4bc4665293254cbe678')
    const doctor7=await Doctor.findById('5e3dc4bc4665293254cbe67d')
    const doctor8=await Doctor.findById('5e3de2c308db0a04c8810171')
    res.render('doctor-client',{status1:doctor1.available,
    status2:doctor2.available,
    
status3:doctor3.available,
status4:doctor4.available,
status5:doctor5.available,
status6:doctor6.available,
status7:doctor7.available,
status8:doctor8.available});
});


app.get('/doctor',async(req,res)=>{
    const doctor=await Doctor.findById('5e3b2559eeed0c45ec674a2f')
    console.log(doctor.available)
    
    res.render('doctor',{status:doctor.available});
})
app.get('/bed-server',async(req,res)=>{
    const quan=await Quan.findById('5e395863d6cf0b10e46bb5a2');
    res.render('bed-server',{numbed:quan.bed,numwheel:quan.wheelchair});
})
app.get('/bed',async(req,res)=>{
    const quan=await Quan.findById('5e395863d6cf0b10e46bb5a2');
    res.render('bed-wheel',{beds:quan.bed,wheels:quan.wheelchair})

})
app.get('/upload',(req,res)=>{
    res.render('uploads')
})
app.post('/uploads',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
         res.send('error')   
        }
        else{
            res.render('uploads',{
                msg:'FIle uploaded',
                file:'/uploads${req.file.filename}'
            })
        }
    })
})
app.post('/upload2',(req,res)=>{
    
})
app.get('/feedback',(req,res)=>{
    res.render('feedback'); 
})


app.get('/main',(req,res)=>{
    res.render('main_page')
})


app.listen(port,()=>{
    console.log('server is running');
})