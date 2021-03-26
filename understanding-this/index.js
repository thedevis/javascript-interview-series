function foo(){
    console.log(this.a);
}
let obj={
    a:2,
    foo:function (){
        console.log(this.a);
    }
}
obj.foo();
foo();