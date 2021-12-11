const mongoose=require("mongoose");


const studentSchema=new mongoose.Schema({
    arr:{
        type:[Number],
      
    },
   
   
})


//create  a new collection
const Student=new mongoose.model('Student',studentSchema);

module.exports=Student;