/**
 * Created by shaozhenxing on 16/6/19.
 */
function person(name){
    this.name = name;
}

person.prototype.say = function(){
    console.log(this.name);
}

module.exports=person;



