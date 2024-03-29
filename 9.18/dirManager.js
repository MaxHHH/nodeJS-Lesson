const fs = require ("fs");
const path = require ("path");

var fileName = process.argv[2];

var pathName = path.join(__dirname,fileName);

if(fs.existsSync(pathName)) {
    var statObj = fs.statSync(pathName);
    if(statObj.isFile()) {
        fs.unlinkSync(pathName);
    }
    else {
        delDir(pathName);
    }
}
else {
    console.log("not exist");
}

function delDir(pathName) {
    var files = fs.readdirSync(pathName);
    for (var i=0; i<files.length; i++) {
        pathName = path.joim(pathName,files[1]);
        var statObj = fs.statSync(pathName);
        if(statObj.isFile()) {
            fs.unlinkSync(pathName);
        }
        else if(statObj.isDirectory()) {
            delDir(pathName);
        }
    }
}