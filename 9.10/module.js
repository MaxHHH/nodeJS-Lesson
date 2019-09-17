/** 
 * 原生模块，根锁node安装环境安装就存在的模块
 * 引入关键字 require("模块")
*/

const http = require("http");
const fs = require("fs");
const path = require("path")


http.createServer(function(req,res) {
    console.log(fs);
    var filePath = path.join(__dirname,"/module.js");
    res.end("hello world");
}).listen(8081)