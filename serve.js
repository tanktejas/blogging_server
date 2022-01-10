const mongoose=require('mongoose');
const express=require('express');
const path=require('path');
const app=express();

app.use(express.urlencoded({extended:false}))
// this we have to write when our local host deny to connect with another local host.
const cors=require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,            
  //  access-control-allow-credentials:true,
  optionSuccessStatus:200,
}
 

app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://tejas:ab@cluster0.bczol.mongodb.net/test",{useNewUrlParser: true, 
useUnifiedTopology: true
}).then(()=>{  
  console.log("success!!");    
});

const schema=new mongoose.Schema({       
  name:String
});   

const mod=new mongoose.model("Blog",schema);

const b1=new mod({    
  name:"tejas"      
})     

b1.save(); 

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + 'build' , 'index.html'));
})
   
app.use(express.json());


app.post('/datarec',(req,res)=>{
     let data=req.body;
      let val=new mod(data);
      mod.save();

})
  
app.listen(process.env.PORT || 3004,()=>{
  console.log("success!!");
})
