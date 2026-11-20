var express=require('express');
var path = require("path");
var server=express();
const PORT = process.env.PORT || 10000;

server.get('/', function(req,res){

res.sendFile(path.join(__dirname, "public", "index.html"));

 });

server.get('/about', function(req,res){
res.sendFile(path.join(__dirname, "public", "about.html"));
});
server.get('/gallery', function(req,res){
res.sendFile(path.join(__dirname, "public", "gallery.html"));
});
server.get('/contact', function(req,res){
res.sendFile(path.join(__dirname, "public", "contact.html"));
});


// server.listen(5000,function(){

//   console.log("Sever is running on port 5000");

//     });


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});