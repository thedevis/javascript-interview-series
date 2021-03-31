//demonstrate hard bind 

function sum(){
    return this.a+this.b
}
let obj={
    a:10,
    b:30
}
let anotherObj={
    a:40,
    b:20
}
let hardBindSum = function(){
    let result = sum.call(obj);
    return result;
}

console.log(hardBindSum()); // 40
console.log(hardBindSum.call(anotherObj));//40
//This binding is both explicit and strong, so that is called hard binding
//hardBindSum will always give the same result, because it will always
//invoke sum with the same obj object



function foo(something){
    console.log(this.a,something);
    return this.a+something;
}
let baz= function(){
    return foo.apply(obj,arguments);
}
let b= baz(3);//10 3
console.log(b);//13



//Design your own bind method
function bind(fn,obj){
    return function(){
        return fn.apply(obj, arguments);
    }
}

var c= bind(foo,obj);




//using bind method

var p = foo.bind(obj);//it will return a nex function with hard binding 
let d = p(4);
console.log(d);

[1,2,3].forEach(function(it){
    console.log(it+this.a+this.b)
},obj);//our callback method will use this for obj context

//guess the output









