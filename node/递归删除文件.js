var fs = require("fs");
var path = require("path")
fs.mkdirSync("./0.0");
fs.writeFileSync("./0.0/112.js","小强");
function deletedir(dirpath){
    //1,获取文件目录的
    var dir = fs.readdirSync(dirpath);
    //2,遍历dir
    for(var i in dir){
        //3,得到文件或文件夹属性(信息)对象
        console.log(path.join(dirpath,"/",dir[i]));
       var stat = fs.statSync(dirpath+"/"+dir[i]);
            //4,判断是否是文件
            if(stat.isFile()){
                //5,是文件就删除
                fs.unlinkSync(dirpath+"/"+dir[i]);
            }else{
                //6,是文件夹就进去删文件
                deletedir(dirpath+"/"+dir[i]);
            }
    }
     //7,为空文件夹时就可以被删除.
     fs.rmdirSync(dirpath);
}
deletedir("./0.0");
//递归删除文件夹
