#!/usr/bin/env node
/**
 * Created by shaozhenxing on 16/6/20.
 */
/*
 * 启动一个http服务器
 * 并且能自动响应当前目录
 * */

var http = require('http');
var mime = require('mime');
var fs = require('fs');
var path = require('path');
var port = process.argv[2]?parseInt(process.argv[2]):1212;
var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><div></div></body></html>';

http.createServer(function(req,res){
    var url = req.url;

    if(req.url == '/'){
        var str='<ul>';
        fs.readdir('.',function(err,files){

            files.forEach(function(file){
                str+='<li><a href="/'+file+'">'+file+'</a>></li>';
            })

            str+='</ul>';
            var data=html.replace('<div></div>',str);
            res.end(data);

        });
    }



    fs.exists(req.url.slice(1),function(status){

        if(!status){
            console.log(status+'35');
        }else{
            fs.stat('.'+req.url,function(err,stat){
                if(stat.isFile()){
                    fs.readFile('.'+req.url,function(err,data){
                        if(err){
                            console.log(err);
                        }else{
                            res.end(data);
                        }
                    })
                }else{
                    //处理文件夹
                    fs.readdir('.'+req.url,function(err,files){
                        var str='<ul>';
                        files.forEach(function(file){
                            str+='<li><a href="'+path.join(req.url,file)+'">'+file+'</a>></li>';
                        })
                        str+='</ul>';
                        html=html.replace('<div></div>',str);
                        res.end(html);
                    })
                }
            });
        }
    })
}).listen(port);