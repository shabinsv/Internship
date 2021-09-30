const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Course');
const Schema=mongoose.Schema;

const TeacherSchema=new Schema({
    username:String,
    email: String,
    password: String,
    phonenumber:Number
})
var Teacherdata=mongoose.model("teacherdata",TeacherSchema);

module.exports=Teacherdata;