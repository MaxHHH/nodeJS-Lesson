const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require ("url");

http.createServer(
    function(req, res) {
        var htmlPath = path.join(__dirname, "/index.html");
        fs.readFile(htmlPath , function (err,html) {
            res.writeHead(200, {"Content-type": "text/html"});
            res.write(html.toString());
            console.log("html");
        })
        fs.readFile("./1.png", function(err, data) {
            res.writeHead(200, {"Content-Type" : "image/png"});
            res.write(data);
            res.end();
            console.log("img");
        })
    }).listen(8081);
console.log("8081")