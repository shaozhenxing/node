/**
 * Created by shaozhenxing on 16/6/20.
 */
var path = require('path');


//获取当前路径中的文件名
console.log(path.basename(__filename)); 

console.log(path.basename(__filename,'.js')); //输出出来就没有了 .js
