/** 
 * 1.传入命令行参数，是一个算术运算式 1*2+3
 *  
 * 2.程序将算术运算时计算得到结果，并且在控制台输出
 *  1*2+3 =5     eval()
 * 3. 程序判断是否传入了命令函参数，如果没有传入
 * 控制台输出，“命令函参数错误!”
*/

var arg1 = process.argv[2];
if(arg1 == undefined) {
    console.log("命令行参数错误！");
}
else if (arg1 == "-help") {
    console.log("帮助：命令参数需为算数运算式")
}
else {
    var result = eval(arg1);
    console.log(arg1 +"=$s",result);
}