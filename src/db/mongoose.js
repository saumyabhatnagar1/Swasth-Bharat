const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sih-main',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})
const Image =mongoose.model('Image',{
    image:{
        type:Buffer,
    },
    name:{
        type:String
    }

})
Image.create({},function(err,returnimg){
    console.log(returnimg.image)
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

// const one =new Doctor({
//     name:'Dr Rahul Arora',
//     available:'yes'
// })
// const two= new Doctor({
//     name:'Dr. Santosh Tyagi',
//     available:'yes'
// })
// const three=new Doctor({
//     name:'Dr. Anurag Triphati',
//     available:'yes'
// })
// const four=new Doctor({
//     name:'Dr. Hardik Sharma',
//     available:'yes'
// })
// const five =new Doctor({
//     name:'Dr. Feroz Shah',
//     available:'yes'
// })
// const six=new Doctor({
//     name:'Dr. Vivek Goyal',
//     available:'yes'
// })


// one.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })

// two.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })
// three.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })
// four.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })
// five.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })
// six.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e)
// })
// const eight=new Doctor({
//     name:'Dr. Soniya Singh',
//     available:'no'
// })
// eight.save().then(()=>{
//     console.log('created')
// }).catch((e)=>{
//     console.log(e);
// })

 

