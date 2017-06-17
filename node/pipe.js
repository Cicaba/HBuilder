//***************************pipe********************************
var fs = require("fs");
var read = fs.createReadStream("../11.xml");
var writeFile=fs.createWriteStream("../22.zip");

//***************************链式流**********************************
var zlib = require("zlib");							//zlib获取zlib压缩模块
read.pipe(zlib.createGzip()).pipe(writeFile);		//把读取流文件流(流给zlib处理压缩)在流给下一个写入流