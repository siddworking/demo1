const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
});

app.get('/home',(req,resp)=>{
    resp.sendFile('public/home.html',{root:__dirname})
});
app.listen(8000);
console.log("server started at port 8080");
