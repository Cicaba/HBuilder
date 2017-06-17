var fs = require("fs");
//console.log(fs);createReadStream
var file = fs.createReadStream("../text.txt");	//createReadStream获取文件流
file.on("data",function(d){						//给它注册data事件,data事件通常一次获取64kb
	console.log(d.toString());
});
//************************************************************************************
fs.readFile("../text.txt",function(error,data){	//readFile:读取文件---c1路径---c2回调函数(---c1为错误信息,---c2为data)
	console.log(data+"");
})
