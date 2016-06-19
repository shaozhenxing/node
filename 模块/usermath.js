/**
 * Created by shaozhenxing on 16/6/19.
 */
var  math1=require('./math.js');
var  math2=require('./math.js');
// console.log(math1 === math2);
// console.log(require.cache);
// console.log(require.resolve('./math.js'));
// console.log(require.cache[require.resolve('./math.js')]);
// 1.加载模块后会缓存，多次加载后得到同一对象 require('http')
// 2.查看模块缓存 console.log(require.cache);  //cache 对象中存放着所有的模块缓存
// 3.查询模块绝对路径require.resolve('./test.js');块缓存
// 4.查看单个的模块缓存 require.cache[require.resolve('./test.js')]
// 5.删除模块缓存 delete require.cache[require.resolve('./test.js')]