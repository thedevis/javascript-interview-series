//What is a constructor call

function foo(a){
    this.a=a;
}
var bar = new foo(2);
console.log(bar);//{a:2}



function foo2(a){
    this.a=a;
    return {a:200};
}
let bar1 = new foo2(2);
console.log(bar1.a);//200 


function foo3(a){
    this.a=a;
    return 200;
}
let bar2=new foo3(2);
console.log(bar2.a);//2

