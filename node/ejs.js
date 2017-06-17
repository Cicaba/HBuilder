/**
 * Created by Cicaba on 2017/6/4.
 */
var ejs = require("ejs");
ejs.renderFile("./test.html",{"id":"asd","supplies":[1,2,3]},function(error,str){
    console.log(str);
});