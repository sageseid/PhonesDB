const server = require('./api/server.js');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
//To run program 
//node index.js

// const express = require("express")
// var app = express()
// app.get("/",function(request,response){
// response.send("Hello World!")
// })
// app.listen(10000, function () {
// console.log("Started application on port %d", 10000)
// });
