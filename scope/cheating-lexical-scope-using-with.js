/**
 * Cheating the lexical scope the with keyword
 * WARNING - with should not be use at production
 */
var boringObj= {
    a:10,
    b:20,
    c:30
};
function foo(obj){
    with(obj){
        a=100
    }
}
const o1={ a:20};
const o2={ b:30 }
foo(o1);
foo(o2)
console.log(o2.a);//undefined
console.log(a);//100 ,damn we got leaked global variable