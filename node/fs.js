var fs = require("fs");
fs.readFile("../text.txt",function(error,data){			//readFile异步获取文件
	console.log("异步",data.toString())
});

console.log("同步读取文件",fs.readFileSync("../text.txt"));//readFileSync同步读取文件(Sync)}
console.log('********************************')
fs.stat("../text.txt",function(error,str){  			//stat获取文件属性对象
	console.log("文件属性",str);
	console.log("是否是文件",str.isFile());				//isFile()是否是文件
	console.log("是否是文件夹",str.isDirectory())		//isDirectory()是否是文件夹
	console.log('异步********************************')	
});
//写入文件
fs.readFile("../text.txt",function(error,data){
	//fs.writeFileSync("../text.txt",data+"小立");		//writeFile同步写入文件
	fs.writeFile("../text.txt",data+"小立",function(error,data){
		console.log("添加成功")
	})
});
fs.writeFileSync("../text1.txt");						//writeFile创建文件
fs.unlinkSync("../text1.txt");							//unlink删除文件
fs.readdir("../",function(error,str){					//readdir获取文件目录
	console.log("文件目录",str)
});
fs.mkdirSync("./ooo000");								//mkdir创建文件目录
fs.rmdir("./ooo000",function(error){					//rmdir删除目录
	if(error){
		throw error;
	}else{
		console.log("11删除成功")
	}
});















