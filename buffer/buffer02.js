/**
 * Created by shaozhenxing on 16/6/19.
 */
//合并Buffer
var buff1 = new Buffer('邵');
var buff2 = new Buffer('兴');
//一个汉字在UTF8编码里是3个字节
console.log(Buffer.concat([buff1,buff2],3).toString('utf-8'));

//复制Buffer
var resule = new Buffer(6);
buff1.copy(resule,0,0,3);
buff2.copy(resule,3,0,3);
console.log(resule.toString());

//判断一个对象是否是buffer
console.log(Buffer.isBuffer(resule));


//获取字节长度  Buffer.byteLength
var s='邵振兴'  //编码不同,长度也不一样
console.log(Buffer.byteLength(s,'UTF-8'));