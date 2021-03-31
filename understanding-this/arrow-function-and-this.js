//ES6 arrow function does not use these rules

function foo(){
    //returning an arrow function
    return (a)=>{
        //'this' here is lexically inherited from 'foo()'
        console.log(this.a);
    }
}

var obj1={
    a:2
}
var obj2={
    a:3
}
var bar = foo.call(obj1);
bar.call(obj2); 



a=100;//declaring in global 
function boo(){
    setTimeout(() => {
        //'this' here is lexically inherited from 'boo'
        console.log(this.a);
        
    }, 2000);
}
boo.call(obj2);// passing reference of obj2, then setTimeout callback function(fat arrow will use)
//the lexically bind scope for foo
boo();//calling in the global context output  100


//ES6 arrow-functions use lexical scoping for this binding, which means they 
//inherit the this binding (whatever it is) from its enclosing function call

name="masoom";

let hello=()=>{
    console.log(this.name);
}

hello();


function wrapper(){
    hello();
}
wrapper.call({name:"praveen"});









