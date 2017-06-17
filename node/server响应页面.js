/**
 * Created by Cicaba on 2017/6/4.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request",function(request,response){
    if(request.url=="/"){
        request.url="/index.html";
    }
    var u = "F:/HTMLdaima/乐购实战"+request.url;
    console.log(u.split(".").reverse()[0]);
    fs.readFile(u,function (error,data) {
        //console.log(u);
        if(error){
            response.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
            response.end("404");
        }else{
            response.writeHead(200,{"Content-Type":"text/"+u.split(".").reverse()[0]+";charset=utf-8"});
            response.write(data);
            response.end();
        }
    })
});
server.listen(80,function () {
    console.log("服务器以启动");
});