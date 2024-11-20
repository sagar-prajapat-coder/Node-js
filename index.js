// create server code here
// const http = require('http');
// const colors = require('colors');
// const data = require('./data');
// http.createServer((req, res) => {
//    res.writeHead(200,{'content-type':'application\json'});
//    res.write(JSON.stringify(data));
//    res.end();
// }).listen(4500);

// file system 
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'Testfiles');

for(i=0;i<5;i++){

   fs.writeFileSync(dirpath+"/Test"+i+".txt",'hello this is test file');
}

