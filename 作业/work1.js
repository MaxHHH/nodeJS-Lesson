const fs = require("fs");
const path = require("path");

var list = [];
var filePath = path.join(__dirname, "./");
var files = fs.readdirSync(filePath);
for (var i = 0; i < files.length; i++) {
	fileObj = {};
	var childPath = path.join(filePath, files[i]);
	var statObj = fs.statSync(childPath);
	if (statObj.isFile()) {
		fileObj.fileType = "file";
	} else if (statObj.isDirectory()) {
		fileObj.fileType = "folder";
	}
	fileObj.fileName = files[i];
	fileObj.fileSize = statObj.size;
	list.push(fileObj);
}
var listStr = JSON.stringify(list);
var str3 = process.argv[2];
if (str3 == "list") {
	console.log(listStr);
}


function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) {
		return true;
	} else {
		if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync(dirname);
			return true;
		}
	}
}
var str1 = process.argv[2];
var str2 = process.argv[3];
if(str1 =="mkdir"){
	mkdirsSync(str2);
}
if(!str1){
	console.log("命令行参数错误！");
}