//what is anonymous function
var a=20;
(function foo(){
    var a=30;
    console.log(a);//20
})()
console.log(a);//20

//drawback of anonymous function
//1. Anonymous functions have no useful name to display in stack traces, which can make debugging more difficult
//2. Without a name, if the function needs to refer to itself, for recursion, etc., the deprecated arguments.callee reference is unfortunately required. 
//3.self reference required when an event handler function wants to unding itself after it fires
//4.a decriptive name helps self-document the code in question


//Invoking function expression Immediately
//What is IIFE -  Immediate invoked function expresson

var a = 2;
(function foo(){

    var a = 3;
    console.log( a ); // 3

})();
console.log( a ); //2



//passing parameter in a IIFE
var a = 2;
(function IIFE( global ){
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2

})( window );

console.log( a );


