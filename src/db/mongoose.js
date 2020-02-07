const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sih-main',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})

// const Doctor=mongoose.model('Doctor',{
//     name:{
//         type:String,
//     },
//     available:{
//         type:String
//     }
// })
// const one=new Doctor({
//     name:'Dr. Sanjeev Jain',
//     available:'yes'
// })
// one.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e);
// })

// const Image =mongoose.model('Image',{
//     image:{
//         type:Buffer,
//         required:true
//     },
//     filename:{
//         type:String
//     }
// })

 

