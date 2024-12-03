// create server code here
// const http = require('http');
// const colors = require('colors');
// const data = require('./data');
const express = require('express');
const requfilter = require('./middleware');
const route = express.Router();
// http.createServer((req, res) => {
//    res.writeHead(200,{'content-type':'application\json'});
//    res.write(JSON.stringify(data));
//    res.end();
// }).listen(4500);

// file system 
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'Testfiles');

// for(i=0;i<5;i++){

//    fs.writeFileSync(dirpath+"/Test"+i+".txt",'hello this is test file');
// }


// Asynchronous progaming handle data using promise
// let a = 20;
// let b = 0;


// let waitingdata = new Promise((resolve,reject) =>{

//    setTimeout(()=>{
//       resolve(80)
//    },2000)

// })

// waitingdata.then((data)=>{
//    b=data;
//    console.log(a+b);
// })



// use express js and routing
const app = express();
// app.get('',(req,res)=>{

//    res.send('Hello this is home page'+' '+req.query.name);
// })

// app.get('/contact',(req,res)=>{
//    res.send(`
//       <input type="text" value="${req.query.name}"><button type="submit">Save</button>
//       `);
// })



// apply middelware


// apply middleware group of routes
route.use(requfilter);

// app.use(reqfilter);

// html page folder access


const path = require('path');
const exp = require('constants');
const publicpath = path.join(__dirname,'html');

app.set('view engine','ejs');

app.get('',(_,resp)=>{
   resp.sendFile(`${publicpath}/index.html`);
});
 
// ejs use 
app.get('/profile',(_,resp)=>{
   const user = {
      name:'sagar',
      email:'sagar@gmail.com',
      skills:['Html','Js','Python','Node js']
   }
   resp.render('profile',{user}); 
});


route.get('/about',(_,resp)=>{
   resp.sendFile(`${publicpath}/about.html`);
});

app.get('*',(_,resp)=>{
   resp.sendFile(`${publicpath}/404.html`);
});

app.use('/',route);
// app.use(express.static(publicpath));
app.listen('4000');