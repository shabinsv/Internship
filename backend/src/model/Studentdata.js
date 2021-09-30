const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Course');
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    ID:String,
    name:String,
    qulification:String,
    dob:String,
    address:String,
    course:String,
    email:String,
    phone:String,
    status:String
})
var Studentdata=mongoose.model("studentdata",StudentSchema);

module.exports=Studentdata;