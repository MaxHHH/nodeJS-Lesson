const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
/**执行到异步方法时，
 * 可以注册一个事件 
 * 然后把具体操作交给操作系统
 * 不影响后续应用程序的执行
*/
fs.readFile(filePath,function(err,data) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})
console.log("read end");