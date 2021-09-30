const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Course');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    title:String,
    description:String,
    venue:String,
    duration:String,
    startdate:String,
    enddate:String
})
var Coursedata=mongoose.model("coursedata",CourseSchema);

module.exports=Coursedata;