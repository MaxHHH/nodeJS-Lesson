const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);
console.log(fileContent);