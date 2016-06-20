/**
 * Created by shaozhenxing on 16/6/20.
 */
var fs = require('fs');

//同步
fs.writeFileSync('./2.txt','中国好node',{encoding:'utf8'});

//异步
//回调函数第一数永远是error对象
fs.writeFile('./3.txt','中国好node',{encoding:'utf8'},function(err,data){
    console.log(err);
})