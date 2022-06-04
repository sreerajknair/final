const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://sreerajknair:sreerajknair@cluster0.u23kb.mongodb.net/myDB");

app.use("/",require("./routes/routess"));

app.listen(3001,function(){
    console.log("express server is running on port 3001");
})