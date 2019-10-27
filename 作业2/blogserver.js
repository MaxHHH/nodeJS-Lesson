const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");


http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if (pathName == "/list") {
        showList(res);
    } 
    /*
    else if (pathName == "/login") {
        showLogin(res);
    }
    else if (pathName == "/listmanager") {
        showListManager(res);
    } 
    else if (pathName == "/addChapter") {
        showAddChapter(res);
    }
    */

    /*else if (pathName == "/upload" && req.method == "POST") {
        uploadFile(req,res)
    }
    else if (pathName.indexOf("upload") >=0 && req.method == "GET") {
        var imgStr = path.join(__dirname , pathName);
        var imgContent = fs.readFileSync(imgStr);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);
    }
    else if (pathName == "/getlist") {
        var files = fs.readdirSync(__dirname + "/upload");
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }*/
}).listen(8083);
console.log("server is listening 8083");


function showList(res) {
    var ListPath = path.join(__dirname, "/chapterList.html");
    var fileContent = fs.readFileSync(ListPath);
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.end(fileContent);
}



/** 
 * 1.页面呈现 访问特定资源路径显示对应页面  
 * 2.
 * 
 * 
 * 
 * 
 * 
*/