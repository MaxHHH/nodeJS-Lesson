/**
 * 自定义模块，自定义js文件，通过require来引入require(相对路径)
 * 被引入模块通过module.exports来对外公布自己的一些方法或撒户型
 * 主模块可以访问被引用如模块公布的方法和属性
 * */
var child = require("./childModule.js");
child.sayHello();
child.showname