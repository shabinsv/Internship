const express=require("express");
const port=process.env.PORT || 3000;
const Userdata=require("./src/model/Userdata");
const Teacherdata=require("./src/model/Teacherdata");
const Coursedata=require("./src/model/Coursedata");
const Studentdata=require("./src/model/Studentdata");

const cors=require('cors');
var jwt = require('jsonwebtoken');
var bodyparser=require('body-parser');
const app= new express();
var multer= require('multer');
var nodemailer = require('nodemailer');
var xxa="";
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,__dirname+'/public/images');
      },
      filename: function (req, file, cb) {
       xxa=file.originalname;
        cb(null,  file.originalname);
      }
  })
  var upload = multer({ storage: storage })


app.use(cors());
app.use(express.static("./public"));
app.use(bodyparser.json());
const username= 'admin@gmail.com';
const password='12345678';

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

app.post("/login",function(req,res){
  console.log(req.body);
  var userData=req.body;
  if(userData.option=='Student'){
        Userdata.findOne({email:userData.email})
        .then(function(data){
         var x=data.password;
          if(x==userData.password){
            var UserId=data._id;
            var Name=data.username;
            var navigation='user';
            var opt='student';
            let payload={subject:username+password}
           let token=jwt.sign(payload,'secretKey')
            res.send({ boolean: true, token, nav: navigation,ID:UserId,option: opt,nam: Name})
            console.log({ boolean: true, token, nav: navigation,ID:UserId,option: opt });
          }
          else{
                  res.send({boolean: false, data: 'Password Wrong' })
          }
        }).catch(function(){
      
          res.send({boolean: false, data: 'Student Not Found' });
          
        });
        
      }  
      else if(userData.option=='Professor'){
        Teacherdata.findOne({email:userData.email})
        .then(function(data){
         var x=data.password;
         var Name=data.username;
          if(x==userData.password){
            var UserId=data._id;
            var navigation='teacher';
            let payload={subject:username+password}
           let token=jwt.sign(payload,'secretKey')
            res.send({ boolean: true, token, nav: navigation,ID:UserId,option:'Professor',nam: Name})
            console.log({ boolean: true, token, nav: navigation,ID:UserId,option:'Professor' });
          }
          else{
                  res.send({boolean: false, data: 'Password Wrong' })
          }
        }).catch(function(){
      
          res.send({boolean: false, data: 'Professor  Not Found' });
          
        });
        
      } 
      else{
        res.send({boolean: false, data: 'Data Not Found' });
      }   
})

app.post("/signup",function(req,res){
  console.log(req.body);
  var userData=req.body;
  if(userData.option=='Professor'){
    Teacherdata.findOne({email:userData.email})
  .then(function(data){
   
    if(data.email==userData.email){
      res.send({ boolean: false, alert:'Email Already Found' })
    }
    else{
     
      var data={
        username: userData.username,
        email: userData.email,
        password:userData.password,
        phonenumber:userData.mobileno,
        star:userData.star
  }
var data=Teacherdata(data);
data.save();


res.send({ boolean: true, alert:'Account Created..',nav:'login' })
    }
  }).catch(()=>{
   
  var data={
        username: userData.username,
        email: userData.email,
        password:userData.password,
        phonenumber:userData.mobileno,
        star:userData.star
  }
var data=Teacherdata(data);
data.save();


res.send({ boolean: true, alert:'Account Created..',nav:'login' })
});
  }
  else if(userData.option=='Student'){
    Userdata.findOne({email:userData.email})
  .then(function(data){
   
    if(data.email==userData.email){
      res.send({ boolean: false, alert:'Email Already Found' })
    }
    else{
     
      var data={
        username: userData.username,
        email: userData.email,
        password:userData.password,
        phonenumber:userData.mobileno,
        star:userData.star
  }
var data=Userdata(data);
data.save();


res.send({ boolean: true, alert:'Account Created..',nav:'login' })
    }
  }).catch(()=>{
   
  var data={
        username: userData.username,
        email: userData.email,
        password:userData.password,
        phonenumber:userData.mobileno,
        star:userData.star
  }
var data=Userdata(data);
data.save();


res.send({ boolean: true, alert:'Account Created..',nav:'login' })
});
  }
  else{
    res.send({ boolean: false, alert:'Error..', })
  }
});

app.post("/addcourse",function(req,res){
  console.log(req.body);

  var course={
    title:req.body.title,
    description:req.body.des,
    venue:req.body.venue,
    duration:req.body.duration,
    startdate:req.body.start,
    enddate:req.body.end
   } 
   var course=new Coursedata(course);
   course.save();
   res.send({data:'ok'});
});

app.get("/course",function(req,res){
  Coursedata.find()
  .then(function(data)
 {
     res.send(data);
 })
});

app.post("/apply",function(req,res){
  console.log(req.body);

  var student={
    ID:req.body.ID,
    name:req.body.name,
    qulification:req.body.qulification,
    dob:req.body.dob,
    address:req.body.address,
    course:req.body.course,
    email:req.body.email,
    phone:req.body.phonenumber,
    status:null
   } 
   var student=new Studentdata(student);
   student.save();
   res.send({data:'ok'});
});

app.get('/studentlist',(req,res)=>{
  Studentdata.find({"status":null})
  .then(data=>{
      res.send(data)
  })

});

function checklimit(req,res,next){
  var course=req.body.course;
 
  Studentdata.count({"course":course,"status":"accepted"})
  .then(data=>{
     
      if(data<=40){
          
          res.send();
          next();
      }else{
          res.send({boolean:true,msg:'This Course Contain 40 Student'})
      }
    
  })
  
}

app.put('/accept',checklimit,(req,res)=>{
  
  id=req.body._id,

  Studentdata.findByIdAndUpdate({"_id":id},
                              {$set:{"status" : "accepted",
                              }})
 .then(function(){
  
  res.send();
 })
 
});

app.put('/reject',(req,res)=>{
  
  id=req.body._id,

  Studentdata.findByIdAndUpdate({"_id":id},
                              {$set:{"status" : "reject",
                              }})
 .then(function(){
  
  res.send();
 })
 
});

app.get('/coursestudent',(req,res)=>{
  
  Studentdata.find({status:"accepted"})
  .then(data=>{
      
      res.send(data)
  
  })
});

app.post("/mail",function(req,res){
  var course=req.body.mail;
  var subject=req.body.subject;
  var msg=req.body.mess;
 
  Studentdata.find({course:course,status:"accepted"})
  .then(function(data){
    res.send(data);
    for(i=0;i<data.length;i++){

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'mailfromResumeBuilder@gmail.com',
               pass: 'xeknaduiwqpnudgm'
           }
       });
    
       const mailOptions = {
        from: 'mailfromResumeBuilder@gmail.com', 
        to: data[i].email, 
        subject: subject, 
        text: msg
      };
    
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
     
    }
  })


 });
 app.get("/status/:id",function(req,res){
  const id = req.params.id; 
  Studentdata.find({ID:id})
  .then(function(data){
    res.send(data);
  })
 });

 



app.listen(port,function(){
  console.log("Server Ready at " +port);
});