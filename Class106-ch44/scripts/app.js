 function sayHello(name, lastName){
    console.log("Hello "+name+" "+lastName);
    let color = "green";
 }
 
 function sum(num1, num2){
    const res=num1+num2;
    return res;
    
 }

 function printNumbers(){
    //print numbers from 1 to 20
    // except 7 and 13
    let sum = 0;
    let count = 0;
    let i = 0;
    let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
for(let i=1; i<21; i++){
    if(i !=7 && i != 13){
        console.log(i);
    }
 for (let i=0; i<numbers.length; i++){
    let num = numbers[i];
console.log(num);
//sum numbers
sum += num;
//only greater numbers
if (num > 500)
count +=1;
 }
 console.log("the sum of the numbers is:" + sum);
 console.log("there are "+count+ "number bigger than 500")
}
//print every number in the list
// print the sum of all numbers
// print how many numbers are greater than 500
 }
 
 function init(){


    console.log("Hello world!");
    const x = "Dave";
    sayHello(x,"Smith");
    sayHello("Pata","Luca");
    sayHello("Pata","Donald");
    const result =sum(51,52);
    console.log(result);
    printNumbers();


 }
 // create a function that sums two numbers and execute it in the init

 window.onload = init;
 //window.onload = init(); this is no

//PRINCIPLE
 //DRY -- DONT REPEAT YOUR SELF
 //KISS - KEEP IT SIMPLE

