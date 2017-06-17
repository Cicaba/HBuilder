var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //res.end("你好");
    console.log(req.url);
    if(req.url=="/index.html"){
        res.end("index")
    }
    if(req.url=="/user.html"){
        res.end("user")
    }
    if(req.url="/"){
        res.end("主页")
    }
}).listen(80,function(){
    console.log("启动成功")
});
