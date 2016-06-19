/**
 * Created by shaozhenxing on 16/6/19.
 */
/*
*  1.每一个js文件都是一个独立的模块
*  2.模块内部的变量都是私有变量,外部其它模块无法访问
* */
function add(a,b){
    return a+b;
}
exports.add=add;