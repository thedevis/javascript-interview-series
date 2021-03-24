/**
 * all declarations, both variables and functions, are processed first, before any part of your code is executed.
 * Only declarations are hoisted,while any assignment or other executable logic are left in place.
 */
console.log(a);//undefined
var a=10;

//Only function declarations are hoisted ,but function expressions are not
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
    // ...
};



/** functions are hoisted first and then variables */
foo(); // 1
var foo;
function foo() {
    console.log( 1 );
}
foo = function() {
    console.log( 2 );
};


/** example */
foo(); // "b"
var a = true;
if (a) {
   function foo() { console.log("a"); }
}
else {
   function foo() { console.log("b"); }
}


/** example  */
foo(); // 3
function foo() {
    console.log( 1 );
}
var foo = function() {
    console.log( 2 );
}
function foo() {
    console.log( 3 );
}