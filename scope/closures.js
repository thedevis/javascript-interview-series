// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

/** bad example of closure */
var b=100;
function foo() {
    var a=10;
    function bar() {
        console.log(a,b);
    }
    bar();
}
foo();

//the closure thing is not observable(well closure thing exist), but we clealy see the lexical scope

/** observable closure example-1 */
function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
    return bar;
}
var baz = foo();
baz(); //2

/**
 * Expecting ans - 
 * After we execute foo(), we assign the value it returned (our inner bar() function) to a variable called baz, and then we actually invoke baz(), which of course is invoking our inner function bar(), just by a different identifier reference.
bar() is executed, for sure. But in this case, it’s executed outside of its declared lexical scope.
After foo() executed, normally we would expect that the entirety of the inner scope of foo() would go away, because we know that the engine employs a garbage collector that comes along and frees up memory once it’s no longer in use. Since it would appear that the contents of foo() are no longer in use, it would seem natural that they should be considered gone.
But the “magic” of closures does not let this happen. That inner scope is in fact still in use, and thus does not go away. Who’s using it? The function bar() itself.
By virtue of where it was declared, bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at any later time.
bar() still has a reference to that scope, and that reference is called closure
 */


/** example -2  */
function foo() {
    var a = 2;
    function baz() {
        console.log( a ); // 2
    }
    bar( baz );
}
function bar(fn) {
    fn();
}
/**
 * The function is being invoked well outside of its author-time lexical scope. Closure lets the function continue to access the lexical scope it was defined in at author time.Of course, any of the various ways that functions can be passed around as values, and indeed invoked in other locations, are all examples of observing/exercising closure. * 
 */


//Some classical example of closure for interview
for (var index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000);    
}

for (var index = 0; index < 5; index++) {
    (function closure(){
        setTimeout(() => {
            console.log(index);
        }, 1000);    
    })()    
}
for (var index = 0; index < 5; index++) {
    (function closure(){
        var j=index;
        setTimeout(() => {
            console.log(j);
        }, 1000);    
    })()    
}

for (var i=1; i<=5; i++) {
    (function(j){
        setTimeout( function timer(){
            console.log( j );
        }, j*1000 );
    })( i );
}

for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}