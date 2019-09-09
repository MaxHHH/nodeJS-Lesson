const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req,res) {

    var htmlPath = __dirname + "\\view\\view.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("UTF-8");
    console.log(path.dirname(htmlPath));
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(htmlContent);
    res.end();
})

server.listen(8081);
console.log("server is listening 8081");