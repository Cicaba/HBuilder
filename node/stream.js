//文件流
//处理流事件 --> data, end, and error
var fs = require("fs");
var stream = fs.createReadStream("../text.txt");  //创建读流
stream.on("data",function(data){				  //注册data事件
	console.log(data.toString())
});
stream.on("error",function(error){				//注册error事件
	console.log("找不到",error)	
});
stream.on("end",function(){						//end成功事件
	console.log("读取成功")
});
//***********************************************************
var write=fs.createWriteStream("../11.xml");	//createWriteStream创建写入流
var data = "0.0";
write.write("0.0","utf8");	
write.write("o.0","utf8");
write.end();//写入流的必须结束
write.on("finish",function () {
	console.log("完成")
});
write.on("error",function (error) {
	throw error;
});
//***************************pipe********************************
stream.pipe(write)								//管道方式
//***************************链式流**********************************
var zlib = require("zlib");							//zlib获取zlib压缩模块
var read = fs.createReadStream("../11.xml");		
var writeFile=fs.createWriteStream("../22.zip");
read.pipe(zlib.createGzip()).pipe(writeFile);		//把读取流文件流
