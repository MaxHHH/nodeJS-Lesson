const fs = require("fs");
const path = require("path");

//在当前目录下创建一个文件夹
fs.mkdirSync("hello");

//读取文件目录
var list = fs.readdirSync(__dirname);;
console.log(list);

//递归 删除文件夹内容
var files = fs.readdirSync(path.join(__dirname,"/node"));
fs.unlinkSync(path.join(__dirname,"/node/" + files[0]));

//rmdirSyn()删除文件夹，非空无法删除
fs.rmdirSync(path.join(__dirname, "/node"));