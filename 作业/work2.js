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

var arg = process.argv[2];

if(arg == "mkdir") {
    mkdirsSync(arg1);
    console.log("创建成功");
}
else if (arg == "list") {
    console.log(listStr);
}
else if (arg == undefined) {
   console.log("命令函参数错误");
}