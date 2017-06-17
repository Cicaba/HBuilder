/*
 * promise的用法（Promise是一个对象）
 *
 * 		promise状态有三个： pending（等待）  Resolved（成功）  Rejected（失败）
 * 		状态转换只有两种：
 * 			pending（等待）   =>  Resolved（成功）
 * 			pending（等待）   =>  Rejected（失败）
 *
 * 		new Promise(function(resolve,reject){
 * 			//执行异步操作
 * 			if(成功){
 * 				resolve(data);
 * 			}else{
 * 				reject(msg);
 * 			}
 * 		});
 */
var fs = require("fs");
/*
new Promise(function (resolve,reject) {
    if(resolve){
        fs.readFile("../text.txt",function(error,data){
            resolve(data)
        })
    }
}).then(function (data) {
    console.log(data);
});*/
var datas="";
new Promise(function (resolv,reject) {
    if(resolv){
        fs.readFile("../text.txt",function(error,data){
            resolv(datas = data);
        })
    }else{
        reject(reject);
    }
}).then(function(data){
    console.log(data);
}).then(function () {
    console.log(1);
}).then(function () {
    console.log(2);
}).then(function(){
    console.log(3);
});