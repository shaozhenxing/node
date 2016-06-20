/**
 * Created by shaozhenxing on 16/6/20.
 */
var fs = require('fs');

//创建目录
// fs.mkdir('./a',function(err,data){
//     if(err)console.log(err);
// })

//读取文件夹下面所有的文件
fs.readdir('./a',function(err,files){
    console.log(files);
    files.forEach(function(file){
        fs.readFile('./a/'+file,function(err,data){
            console.log(data.toString());
        });
    })
})

//获取文件详细信息
fs.stat('./a',function(err,stat){
    console.log(stat);
})

//检测某个文件是否存在
fs.exists('./a',function(exists){
    console.log(exists);
})