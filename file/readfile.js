/**
 * Created by shaozhenxing on 16/6/20.
 */
/*
* fs是实现文件的读写操作
* */

var fs = require('fs');

var content = fs.readFileSync('./1.txt');

// 返回的是Buffer

//如何转成字符串呢?
// 1. toString
console.log(content.toString());

//2. 加上编码
var content2 = fs.readFileSync('./1.txt',{encoding:'utf8'});
console.log(content2);
//所有的同步方法都晚于同步方法执行
//异步调取
fs.readFile('./1.txt',{encoding:'utf8'},function(err,data){
    console.log(data);
})


