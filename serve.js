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

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://tejas:ab@cluster0.bczol.mongodb.net/test",{useNewUrlParser: true, 
useUnifiedTopology: true
}).then(()=>{  
  console.log("success!!");    
});

const schema=new mongoose.Schema({       
  name:String,
  comment:String  
});   

  
const mod=new mongoose.model("Blog",schema);

const b1=new mod({    
  name:"tejas"      
})     

// b1.save(); 

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
  console.log("as");
    res.sendFile(path.join(__dirname + 'build', 'index.html'));
})   

app.use(express.json());
app.post('/adddata',(req,res)=>{
  console.log("as");
     let data=req.body;
      let val=new mod(data);
      val.save();
      
})
  
app.post('/datastore',async (req,res)=>{  
  let data= await mod.find();
  res.send(data);    
});
  
    
app.listen(process.env.PORT || 3001,()=>{
  console.log("success!!");
})
