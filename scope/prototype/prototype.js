let obj1={
    a:100
}
let obj2 = Object.create(obj1);
console.log(obj2.a);
obj1.a=200;
console.log(obj2.a);
