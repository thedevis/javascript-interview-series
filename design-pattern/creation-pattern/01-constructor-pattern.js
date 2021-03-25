/**
 * ++++++++++++++++++++++++++++++++++++++++
 * CONSTRUCTOR PATTERN
 * ++++++++++++++++++++++++++++++++++++++++
 *  There are many ways to create objects in JavaScript, such as using the {} notation or using
 * Object.create.
 * However, in JavaScript, the use of the “constructor” pattern is very popular as it can create multiple objects of a specific kind.
 * 
 */

function Human(name,age){//ES5 function based constructor
    //defining properties
    this.name=name;
    this.age=age;
    //defining a method inside the constructor function
    this.describe=function(){
        console.log(`${this.name} is ${this.age} old`);
    }
}
const person1 = new Human("Praveen kumar",28);
person1.describe();
const person2 = new Human("Masoom Singh",24);
person2.describe();

//ES6 class based constructor implementation
class House{
    constructor(houseName, year){
        this.houseName=houseName;
        this.year=year;
    }
    describe(){
        console.log(`this house - ${this.houseName} was built in ${this.year}`)
    }
}
const praveenHouse = new House("Sarvottam Nivas",2018);
praveenHouse.describe();


