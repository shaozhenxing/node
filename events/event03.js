/**
 * Created by shaozhenxing on 16/6/20.
 */
var Event = require('events');

var Events = new Event;

//注册事件  执行一次就取消绑定
Events.once('click',function(things1,things2){
    console.log('买'+things1+','+things2);
})

//触发事件   //可以传多个
Events.emit('click','包包','鞋子');