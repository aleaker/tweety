const express = require("express");
const app = express();

app.use("/special", function(req, res, next) {
  res.send("soy un middleware");
  next();
});

app.get("/", function(req, res, next) {
  res.send("hola");
});

app.get("/special", function(req, res, next) {
  res.send("soy especial");
});

app.listen(3000, function() {
  console.log("soy el server y estoy escuchando!");
});
