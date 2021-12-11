const express=require("express");

require("./db/conn");
 const Student=require("./db/models/students");

const app=express();
const port =process.env.PORT||8000;

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("browser running")
// })

//create a new array
// app.post('/students',(req,res)=>{
//     console.log(req.body)
//     const user=new Student(req.body)
//     user.arr.push(1,2,3,4,5)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
   
// })
//create new array
app.post('/students',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});


app.get('/students',function(req,res,next){
    Student.find({}).then(function(students){
        res.send(students);
    }).catch(next);
});


app.listen(port,()=>{
    console.log(`server running at ${port}`);
})



