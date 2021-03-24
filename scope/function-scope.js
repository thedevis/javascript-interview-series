// function foo(a){
//     var b=2;
//     function bar(){
//         console.log(b);
//     }
//     var c=3;
// }
//bar();//ReferenceError: bar is not defined
//console.log(a,b,c);//ReferenceError: a,b,c is not defined

/**
 * Principal of Least Privilege or Least Authority or Least Exposure - according to this principle , you should
 * expose only what is the minimally necessary and hide everything else e.g basic idea behind API for module/Object/functionality
 */
// function doTask(a){
//     b=a+doPrivateTask(a*10);//what will be scope of b. It will be in closure not global scope. if this is available in 
//     console.log(this.b);//undefined
//     //global scope then this.b should print the value but it will print undefined
//     console.log(b*14);
// }
// function doPrivateTask(a){
//     return a-2;
// }
// var b;
//doTask(2);//280

/**
 * using the Least Exposure principle 
 * better way to write this program
function doTask(a){
    function doPrivateTask(a){
        return a-2;
    }
    var b;
    b=a+doPrivateTask(a*10);
    console.log(b*14);
}
doTask(2);//280

**Now b and doPrivateTask(...) are not available for any outside influence.
**/

//classical example of collision
function foo(){
    function bar(a){
        i=3;//this i variable exist in the scope of foo. bar is accesing this variable due to closure
        console.log(a+i);
    }
    for(var i=0;i<10;i++){
        bar(i*2);//oops, infinite loop 
    }
}
foo();
//output will be 3 11.....infinity

//how to avoid collision
//create single an object with a unique name in the global scope and bind our variable to that object -  Global namespace

const myLibrary={
    PI:parseFloat(22/7).toFixed(10),
    firstTask:function(){
        //...
    },
    secondTask:function(){
        //....
    }
};

//second approach - Module management




/**Function as scopes */

var a = 2;
function foo(){
    var a=90;
    console.log(a);
}
foo();




