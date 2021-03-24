//The philosophy behind block scoping is all the about to declare a variable as close as possible, as local
//as possible

for(var i=0;i<10;i++){
    console.log( i );
}
console.log( i );

//this var i is polluting the entire scope


//ES6 introduces a new keyword let, which site alongside var a another way to the declare variable
//the let keyword attaches the variable declaration to the scope of whatever block {...} it's contained in

var foo = true;
if (foo) {
    let bar = foo * 2;
    bar = function( bar ){};
    console.log( bar );
}

console.log( bar );//reference Error



/** 
 * 
 * Garbase Collection and block scope
 */




function processBigData(data){
    //do some processing
}
var someVeryBigData= {/**very large data */}
processBigData(someVeryBigData);
var btn = document.getElementById("#myButton");
btn.addEventListener("click",function click(event){
    console.log("button click")
},/*capturingPhase=*/false);

/**
 * As you can see this click handler doesn't need this very big data but the JS engine will still have to keep the structure around, 
 * since the click function has a closure over the entire scope.
 * Block scope can address this problem. But How? check the below code
 * 
 */



/**
 * Block-scoping can address this concern, making it clearer to the engine that it does not need to keep someReallyBigData around:
 */
 function processBigData(data){ 
     //do some processing
    }
{
    let someVeryBigData= {/**very large data */}
    processBigData(someVeryBigData);
}
var btn = document.getElementById("#myButton");
btn.addEventListener("click",function click(event){
    console.log("button click")
},/*capturingPhase=*/false);




/**
 * const -
 In addition to let, ES6 introduces const, which also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value at a later time results in an error
 * 
 */

 var foo = true;
 if (foo) {
     var a = 2;
     const b = 3; // block-scoped to the containing `if`
     a = 3; // just fine!
     b = 4; // error!
 }
 
 console.log( a ); // 3
 console.log( b ); // ReferenceError!