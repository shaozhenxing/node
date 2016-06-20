/**
 * Created by shaozhenxing on 16/6/20.
 */
var path =require('path');
/*
*
* resolve 以应用程序根目录为起点,根据参数值解析出一个绝对路径
* 1.以应用程序根目录作为起点
* 2.如果参数是普通字符串,则意思是当前目录的下级目录
* 3.如果是..则回到上一级目录
* 4./开头表示一个绝对的根路径 回到跟目录
* */

console.log(path.resolve('/a','..','b','d'));