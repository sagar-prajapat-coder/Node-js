const express = require('express');
const db = require('./db');
const app = express();


// make api routes
app.get('/',async (req,resp) => {
    let data = await db();
    data = await data.find().toArray();
    resp.send(data);
});


app.post('/',async (req,resp)=>{
    // let data = await db();
    console.log(req.body);
    // data = await data.insert(req.body);
    resp.send({name:'test'});
});


app.listen(3000) 