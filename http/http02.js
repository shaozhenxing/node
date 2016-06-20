/**
 * Created by shaozhenxing on 16/6/20.
 */
var http = require('http');
var fs = require('fs');

/*
* 创建一个http服务器
* ip 端口
* 处理客户端的请求
*
* req 客户端的请求
* res 服务器端的响应
* */

var server = http.createServer(function(req,res){
    console.log(req.url);  //req.url 返回的地址没有.
   if(req.url == '/index.html'){
       fs.readFile('./index01.html',function (err,data) {
           res.write(data); //向客户端发响应
           res.end(); //结束响应 挂掉电话
       });
   }else if(req.url == '/index.css'){
       fs.readFile('./index.css',function (err,data) {
           res.write(data); //向客户端发响应
           res.end(); //结束响应 挂掉电话
       });
   }
});

//在本机监听8080端口
server.listen(8080);