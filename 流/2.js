/**
 * Created by shaozhenxing on 16/6/20.
 */
var fs = require('fs');
var rs=fs.createReadStream('./1.txt',{
    highWaterMark:5
});

rs.setEncoding('utf8'); //可以在创建流之后指定编码

//监听读取文件
rs.on('data',function(data){
    console.log(data);
    rs.pause(); //暂停触发data事件
});

//当读完文件的时候回触发end事件
rs.on('end',function(){
    console.log('读完了');
});

//当出错的时候会触发error事件
rs.on('error',function(){
    console.log('出错了');
});

setTimeout(function () {
    rs.resume() //重新开始触发data事件
},5000)
/**
 *  1.先从文件中读取64k,然后 emit过去
 *  2.再从文件中读取64k,再emit过去
 *
 * */