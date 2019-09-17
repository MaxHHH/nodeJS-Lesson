const stream = require("stream");
const fs = require ("fs");
const path = require("path");


var filePath = path.join(__dirname, "/from.txt");
var streamReader =fs.createReadStream(filePath);
var reader = new stream.Readable()

var str = readStream();
var x = str.toUpperCase();

reader.push();
reader.push();