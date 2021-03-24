function foo(a) {
    console.log( a + b );
    b = a;
}
//foo( 2 );
//Uncaught ReferenceError: b is not defined

//lexical scope
function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log( a, b, c );
    }
    bar( b * 3 );
}

//foo( 2 ); // 2 4 12



//foo( "var b = 3;", 1 ); // 1 3
//this is the classic case to cheat the lexical scope. b variable value is change inside the function because eval()
//create the outer b was available inside the foo  because of closure but after the execution of eval, it declare b variable inside the foo, that why b value become 3
