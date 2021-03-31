function pooh(){
    console.log(this.a);
}
var obj1={
    a:2,
    pooh:pooh
}

var obj2={
    a:3,
    pooh:pooh
}

//implicit binding
obj1.pooh();//2
obj2.pooh();//3

//explicit binding
obj1.pooh.call(obj2);//3
obj2.pooh.call(obj1);//2

//explicit binding takes precedence over implicit binding
console.log("=====================");

function foo(something){
    this.a=something;
}
var obj1={
    foo:foo
}
var obj2={};
obj1.foo(2);
console.log(obj1.a);//2

obj1.foo.call(obj2,3);
console.log(obj2.a);//3

var bar = new obj1.foo(4);
console.log(obj1.a);//2
console.log(bar.a);//4 --- new binding is more precedent than implicit binding



console.log("====== new binding VS hard binding");
function foo(something){
    this.a=something;
}
var obj1={};
var bar = foo.bind(obj1);
bar(2);



console.log(obj1.a);//2
var baz = new bar(3); //it will construct a brand new object 
console.log(obj1.a);//2
console.log(baz.a);//3




