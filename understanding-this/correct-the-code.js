
/** Exercise - 1 */
function ProcessManager(){
    return this.processIds.join(",");
}
const processList={
    processIds:[12,45,89]
};
console.log(ProcessManager(processList)); // 12,45,89



/** Exercise -2  */
//count the function
function testFunction(param){
    console.log(`${param}`);
    this.count++;
}
testFunction.count = 0;
for(let i=0;i<5;i++){
    testFunction(i) //
}
console.log(testFunction.count); //
//where is the count