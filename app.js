const express = require("express");
const app = express();

app.use(function(req,res,next){
 console.log("soy un middleware")
 next();
})

app.get("/",function(req,res,next){
    res.send("hola")
})

