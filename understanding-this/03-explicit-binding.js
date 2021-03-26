/**
 * 
 * use of call,apply and bind method
 * in implicit binding , we need to mutate the object to include a reference on itself to the function
 * and this property reference to indirectly bind this to the object
 * 
 * 
 * 
 */



function foo(name){
    console.log(this.a,name);
}
let obj={
    a:10
}
foo.call(obj,"Praveen");//Invoking foo with explicit binding by foo.call(...) allow us to force its this to be obj
foo.apply(obj,["Kumar"]);//Invoking foo with explicit binding by foo.call(...) allow us to force its this to be obj
