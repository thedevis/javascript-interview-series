function foo(str, a) {
    eval( str ); // cheating!
    console.log( a, b );
}
var b = 2;
foo("var b=100",13);//13 100


/**
 * eval(..) when used in a strict-mode program operates in its own lexical scope,
 *  which means declarations made inside of the eval() do not actually modify the enclosing scope.
 */
function boo(str){
    "use strict";
    eval(str);
    console.log(a);//ReferenceError: a is not defined
}
boo("let a=10");







