var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next) {
  /** 
   * render页面的渲染
   * 读取ejs文件内容，将文件中占位符替换（<%=userName %>）
   * 替换成后端给定的数据（也就是render的第二个数据）
   * 再将文件中的代买内容响应到客户端去
  */
 res.render("list", {userName: "zhangsan",newList:[
   {"newId":1 , newTitle:"kajsdhkajshdkja"},
   {"newId":2 , newTitle:"sadkaksjndjas"}
]})
});

router.get('/index/list',function(req,res,next) {
  res.end("indexlist")
 });

module.exports = router;
