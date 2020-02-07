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


app.get('/doctor',async(req,res)=>{
    const doctor=await Doctor.findById('5e3b2559eeed0c45ec674a2f')
    console.log(doctor.available)
    
    res.render('doctor',{status:doctor.available});
})

app.get('/doctor-client',async(req,res)=>{
    const doctor=await Doctor.findById('5e3b2559eeed0c45ec674a2f')
    console.log(doctor.available)
    
    res.render('doctor-client',{name:doctor.name,status:doctor.available});
})
app.get('/bed-server',async(req,res)=>{
    res.render('bed-server');
})
app.get('/bed',async(req,res)=>{
    const quan=await Quan.findById('5e395863d6cf0b10e46bb5a2');
    res.render('bed',{beds:quan.bed,wheels:quan.wheelchair})

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
            console.log(req.file);
            res.send('test')
        }
    })
})

app.post('/display',(req,res)=>{
    const image =Image.find({});
    res.send(image)

})
app.get('/main',(req,res)=>{
    res.render('main_page')
})


app.listen(port,()=>{
    console.log('server is running');
})