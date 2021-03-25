const express = require('express');
const app  = express();

const Port = process.env.Port || 4000 ;


app.use('/',require("./Router/Index"))


app.listen(Port,()=>{
    console.log(`server is Run : ${Port}`);
})
