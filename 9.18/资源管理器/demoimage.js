const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req, res) {
    fs.readFile("./1.png", function(err, data) {
        res.writeHead(200, {"Content-Type" : "image/png"});
        res.write(data);
        res.end();
        console.log("img");
    })
}).listen(8081);

console.log("server 8081");