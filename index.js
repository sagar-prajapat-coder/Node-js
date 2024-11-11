const http = require('http');
const colors = require('colors');
http.createServer((req, res) => {
    res.write("Hello, sagar");
    res.end();
    console.log("test".red)
}).listen(4500, () => {
    console.log("Server is listening on port 4500".yellow);
});
