/**
 * Created by shaozhenxing on 16/6/20.
 */
var path =require('path');
/*
*
*relative  用于获取两个路径之间的相对关系
* 有两个参数 ,可以是相对路径,也可以是绝对路径
*
* */

console.log(path.relative('../stream',__dirname));