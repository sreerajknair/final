const express = require("express");
const router = express.Router();
const Sign = require("../models/modelss");

router.route("/create").post((req,res)=>{
 const Name=req.body.Name;
 const email=req.body.email;
 const phone=req.body.phone;
 const psw=req.body.psw;
 const pswrd=req.body.pswrd;
 const newSign = newSign({
     Name,
     email,
     phone,psw,
     pswrd

 });
 newSign.save();
})
module.exports=router;
