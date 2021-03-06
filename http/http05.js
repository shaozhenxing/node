/**
 * Created by shaozhenxing on 16/6/20.
 */
var http = require('http');
var fs = require('fs');
var path =require('path');
var mime = require('mime'); //第三方库

/*
* 创建一个http服务器
* ip 端口
* 处理客户端的请求
*
* req 客户端的请求
* res 服务器端的响应
* */



var server = http.createServer(function(req,res){

    //设置响应的头部编码
    res.setHeader('Content-type',mime.lookup(req.url)+';charset=utf-8');

    if(req.url == '/clock'){
        res.end(new Date().toLocaleString());
    }else{

        fs.readFile('.'+req.url,function (err,data) {
            res.end(data); //结束响应 挂掉电话
        });
    }

});

//在本机监听8080端口
server.listen(8088);