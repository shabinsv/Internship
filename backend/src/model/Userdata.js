const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Course');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:String,
    email: String,
    password: String,
    phonenumber:Number
})
var Userdata=mongoose.model("userdata",UserSchema);

module.exports=Userdata;