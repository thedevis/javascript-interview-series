const Printer = (function(){
    let instance;
    function connectToPrinter(){
        //code to connect to printer
        //console.log('I will called once');
    }
    return {
        getConnection:function(){
            if(!instance)
                instance = new connectToPrinter();
            return instance;
        }
    }
})();
let connection1 = Printer.getConnection();
let connection2 = Printer.getConnection();
let connection3 = Printer.getConnection();
//console.log(connection1 === connection3);


/**  With ES6 class */
let instance=null;
class HPPrinter{
    constructor(pageCount){
        console.log("it will call once");
        this.pageCount =pageCount;
    }
    static connect(pageCount){
        if(!instance){
            instance = new HPPrinter(pageCount);
        }
        return instance;
    }
    display(){
        console.log(`You are connected to the printer. You want to print ${this.pageCount} pages.`)
    }
    
}

var obj1 = HPPrinter.connect(2)
console.log(obj1)
obj1.display()
var obj2 = HPPrinter.connect(3)
console.log(obj2)
obj2.display()
console.log(obj2 == obj1)




