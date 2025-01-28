const express = require('express');
const db = require('./db');
const app = express();


// make api routes

app.get('/',async (req,resp)=>{
    let data = await db();
    data = await data.find().toArray();
    resp.send(data);
    // resp.send({name:'sagar'})
});

app.listen(5000) 