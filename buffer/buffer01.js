/**
 * Created by shaozhenxing on 16/6/19.  加油
 */
var buf1 = new Buffer(6);
buf1.fill(1)  //把buffer中所有元素置为1
// console.log(buf1);

//数组里一定是一个数字,范围在0~255之间 不管写a,还是b都会识别成0
var buf2 = new Buffer([15,16,17]);
console.log(buf2);

//通过字符串来创建
var buf3 = new Buffer('abc');
console.log(buf3);

