const stream = require("stream");

var reader = new stream.Readable();
reader.push("hello");
reader.push("world");
reader.push(null);
reader.push(process.stdout); 