const fs = require ("fs");
const path = require ("path");

var filePath = path.join(__dirname, "/stream.txt");
var writeStream = fs.createWriteStream(filePath);

writeStream.write("hello world");
writeStream.end();