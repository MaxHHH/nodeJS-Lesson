var i = 0;


process.stdin.on("data",function(data) {
    i++;
    if( i == 4) {
        process.exit();
    }
    else {
        console.log(data.toString());
    }

})

(
    Name: "ShadowRoot",
    Email: "safdad@sfda.com",
    qq:"12315324",
    mobile:"dasdasd0",
)