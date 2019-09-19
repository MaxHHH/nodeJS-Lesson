const http = require ("http");
const path = require ("path");
const fs = require("fs");

var fileName = process.argv[2];

http.createServer(function (req,res) {
    if(fileName == undefined) {
        var str = "";
        /** 
         * fs.readFile() 是一个异步方法，执行到该句不会等待文件读取完成，就直接执行后边语句
         * 回调函数是等到文件读取完成之后财智星
        */
        fs.readFile(process.argv[1], function (err, data) {
            if(err) {
                console.log(err);
            }
            else{
                str = data.toString();
                res.end(str);
            }
        })
    }
    else {
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)) {
            fs.readFile(pathName,function (err, data) {
                if(err) {
                    console.log(err);
                }
                else {
                    res.end(data.toString());
                }
            })
        }
        else {
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);

console.log("server listen 8081");