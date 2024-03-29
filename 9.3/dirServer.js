//1.引入原生http模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

//2.创建一个服务器
var server = http.createServer(function(req, res) {
    //req.url 表示url地址中，端口以后的内容
    //使用了url.parse 将req.url转化为了对象，对象提取pathname
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    //根据资源路径，可以决定执行那一段代码
    if(urlPathName == "/favicon.ico") {
        res.end();
    }
    else if(urlPathName == "/"){
        //4. 当客户端的http请求发起的时候，才会执行回调函数里面的内容
        var htmlPath = __dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");

        res.writeHead(200, {"Content-type": "text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathName == "/js/index.js") {
        var jsPath = path.join(__dirname, "/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        
        res.writeHead(200, {"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }

});

//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");