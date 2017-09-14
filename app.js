var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("index");
});

app.get("/mission",function(req,res){
    res.render("mission");
});

app.get("/locations",function(req,res){
    res.render("locations");
});

app.get("/donations",function(req,res){
    res.render("donations");
});

app.get("/partners",function(req,res){
    res.render("partners");
});

app.get("/volunteer",function(req,res){
    res.render("volunteer");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});