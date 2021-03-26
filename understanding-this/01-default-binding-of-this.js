
/**
 * default bind when function is executing in global execution context
 */
function foo(){
    console.log(this.a);//this is bind to global scope
}
a=2;
foo();





/** 
 * in strict mode , global object is not eligible for the default binding 
 */
function baz(){
    "use strict";
    //in strict mode global this will be undefined
    console.log(this.c); //this is undefined inside the strict mode
}
c=100;
//baz();// can not read property 'c' of undefined


/**
 * Note - the global object is only eligible for the default binding if the content of the function are not
 * running in strict mode
 */


function zoo(){
    "use strict";
    console.log(this.c);
}
(function(){
    "use strict";
    foo();//2 
    baz()//it will throw Type Error : can not read property 'c' of undefined
})()





