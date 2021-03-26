//Default binding -  default binding of this will always global binding
//in node
function foo() { 
    console.log( this.a ); // 2
}
 a=2; //in global scope
foo();

//in browser
function foo() { 
    console.log( this.a ); // 2
}
 var a=2; //in global scope
foo();



//Rule -2 : - implicit binding
