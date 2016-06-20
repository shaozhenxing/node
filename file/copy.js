/**
 * Created by shaozhenxing on 16/6/20.
 */
var fs = require('fs');


/*
* 拷贝代码的时候不要指定编码
* 因为拷贝的文件不一定是什么编码呢
* 最好是导出来是什么编码,放进去也是什么编码
* 就好比你把水倒到另一桶水里面
* */
function copy(src,target){
    fs.readFile(src,function(err,data){
        if(err){
            console.log(err);
        }else{
            fs.writeFile(target,data,function(error){
                if(error)console.log(error);
            })
        }
    });
}

copy('./3.txt','./4.txt');