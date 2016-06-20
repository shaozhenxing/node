/**
 * Created by shaozhenxing on 16/6/20.
 */
var Event = require('events');

var Events = new Event;

//注册事件
Events.addListener('click',function(){
    console.log('click');
})

//触发事件
Events.emit('click');