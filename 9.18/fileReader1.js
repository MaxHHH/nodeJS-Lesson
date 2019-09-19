const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

http.createServer(httpManager).listen(8081);
console.log("server listen 8081")

function httpManager(req,res) {
    var reqObj = url.parse(req.url, true);
    var pathName = reqObj.pathname;
    switch(pathName) {
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile(reqObj,res);
            break;
        default:
            res.end("error");
            break;
    }
}
var fileList = fs.readdirSync(__dirname);

function showIndex(res) {
    var strPath = path.join(__dirname,"/fileReader.js");
    var fileContent = fs.readFileSync(strPath);
    res.writeHead(200, {"Content-Type":"text/js"});
    res.write(fileContent.toString());
    res.end();
}

function showFile(reqObj,res) {
    var fileId = reqObj.query.fileId;
    var fileName = fileList[fileId];
    var filePath = path.join(__dirname,"/" + fileName);
    var fileContent1 = fs.readFileSync(filePath);
    console.log(fs.existsSync(filePath));
    res.end(fileContent1);
}
 



