/**
 * Created by shaozhenxing on 16/6/20.
 */
var path =require('path');
/*
* normalize 将非标准的路径字符串转化为标准路径字符串
* 1.可以解析
* 2.多个杠可以转成一个杠
* 3.window下反杆会转成正杠
* 4.如结尾以杠结尾的则保留
*
* */

console.log(path.normalize('a/../b//b/b/'));