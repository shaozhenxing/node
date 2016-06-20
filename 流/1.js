/**
 * Created by shaozhenxing on 16/6/20.
 */
var fs = require('fs');
var rs=fs.createReadStream('./1.txt',{
    flags:'r',  //表示打开文件之后想干什么,默认为r
    encoding:null,//null 得到的数据是二进制类型的,如果指定编码,那么是字符串类型的
    start:3, //读取的字节索引开始的位置
    end:6,   //读取的字节索引的结束位置
    highWaterMark:1  //默认最高每次发送64k
})

rs.setEncoding('utf8'); //可以在创建流之后指定编码

//监听读取文件
rs.on('data',function(data){
    console.log(data);
});

//当读完文件的时候回触发end事件
rs.on('end',function(){
    console.log('读完了');
});

//当出错的时候会触发error事件
rs.on('error',function(){
    console.log('出错了');
});


/**
 *  1.先从文件中读取64k,然后 emit过去
 *  2.再从文件中读取64k,再emit过去
 *
 * */