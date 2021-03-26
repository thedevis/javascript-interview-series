/**
 * 
 * Second Rule -  binding
 */

function foo(){
    console.log(this.a)
}
const obj={
    a:100,
    b:200,
    foo:foo,
    boo:function(){
        console.log(this.b);
    }
}

obj.foo(); //obj is the this for the function
obj.boo(); //obj is the this for function

/**
 * Point to be noted
 * 1. Regardless of whether boo is function inside the object or foo is added as reference later on foo , in 
 * neither case is the function really "owned" or "contained" by the obj Object
 * 
 * 2. call-site uses the obj context to reference the function so we can say that the obj object "owns" or "contains" the
 * function reference at the time the function is called
 * 
 * When there is a context object for a function reference, the implicit binding rule says 
 * that it’s that object that should be used for the function call’s this binding.
 * 
 * **/


let newFoo = obj.foo; 

newFoo();// it will loose the implicit binding and then  default binding rule will apply 



/** Implicitly lost example  */

name="Global Praveen"; //declaring inside the global object
//module.exports.name="Praveen Kumar";
//console.log(this);
function baz(){
    console.log(this.name);
}
const myObj= {
    name:"Nikhil",
    baz:baz
}
var duplicateBaz = myObj.baz;
//duplicateBaz(); //Global Praveen 





function anotherFun(callback){
    callback();
}
anotherFun(baz);
anotherFun(duplicateBaz);
anotherFun(myObj.baz);
setTimeout(baz, 100);////undefined in node, browser will print Global Praveen
setTimeout(duplicateBaz, 100);//undefined in node,browser will print Global Praveen
setTimeout(myObj.baz, 100);//undefined in node,browser will print Global Praveen










