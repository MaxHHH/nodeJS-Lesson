var arg1 = process.argv[2];
if(arg1 == undefined) {
    console.log("命令行参数错误！");
}
else if (arg1 == "-h") {
    console.log("帮助")
}
else {
    var result = eval(arg1);
    console.log(arg1 +"=%s",result);
}