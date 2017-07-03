// client request example
var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
var path = require('path');

//递归创建目录 同步方法
function mkdirsSync(dirname, mode){
    console.log("Create FilePath " + dirname);
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}

function get(url, res){
  var request = http.get({ host: 'www.runoob.com',
                     path: url,
                     port: 80,
                     headers: { 'accept-encoding': 'gzip,deflate' }});
  request.on('response', function(response) {

    if(url == '/') url = '/index.html';

    //url = url.replace(/\//g,'\\');

    var arr = url.match(/(\S+)\/([^\/]+)/);
    var dirName = __dirname.replace(/\\/g,'/');

    if (arr) {
      var filePath = dirName + arr[1];
      mkdirsSync(filePath);
    }

    var file = dirName + url;
    var output = fs.createWriteStream(file);

    switch (response.headers['content-encoding']) {
      // or, just use zlib.createUnzip() to handle both cases
      case 'gzip':
            response.pipe(zlib.createGunzip()).pipe(output);
            break;
      case 'deflate':
            response.pipe(zlib.createInflate()).pipe(output);
            break;
      default:
            response.pipe(output);
            break;
    }
    response.on('end', function(){
      fs.createReadStream(file).pipe(res);
    })
    
  });
}
// console.log('/js/js-tutorial.html?sss'.match('^[^?]*')[0]);

http.createServer(function (req, res){

  var url = req.url.match('^[^?]*')[0];

  var dirName = __dirname.replace(/\\/g,'/');
  var file = dirName + (url == '/' ? '/index.html' : url);
  if(fs.existsSync(file)){
  	fs.createReadStream(file).pipe(res);
  }else{
  	get(url, res);
  }
  
}).listen(80, '127.0.0.1',function(){
	console.log('Server running on port 3000.');
});

