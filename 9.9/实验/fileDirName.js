const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res) {
    var filePath = path.join(__dirname,"/view/view.html");
    var fileContent = fs.readFileSync(filePath);
    fileContent = fileContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
    console.log(filePath);
}).listen(8080);
console.log("server is listening 8080");
