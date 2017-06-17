//*****************************buffer
var buffer = new Buffer(6);//创建一个缓存区为6个字节的空间.
var buffer1 = new Buffer(7);
console.log(buffer);
buffer.write("写读");       //写缓存区
console.log(buffer);
console.log(buffer.toString());//读缓存
//****************************************
buffer.copy(buffer1);         //copy
console.log("拷贝",buffer1);