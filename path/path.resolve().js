/**
 * Created by shaozhenxing on 16/6/20.
 */
var path = require('path');

console.log(path.resolve('a','b')); //他会继续忘上拼

console.log(path.resolve('a','..')); //..就是回到上级