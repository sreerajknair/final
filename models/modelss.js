const mongoose=require("mongoose");
const signupSchema = {
    name:String,
    email:String,
    phone:Number,
    psw:String,
    pswrd:String,
}
const Sign = mongoose.model("Sign",signupSchema);
module.exports = Sign;
