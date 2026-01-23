
//in js this is similar to #include<stdio.h>
const prompt = require('prompt-sync')();


console.log("        Conditional Statements in JavaScript")     
console.log("Conditional statements are used to perform  actions if condition true\n")
console.log("List of Conditional Statements: if, if...else, if...else if...else, switch\n")     


//This accepts any input in string form
let userInput1 = prompt("Enter a number1 ");
let userInput2 = prompt("Enter a number2 ");


let num1 = Number(userInput1) ;
let num2 = Number(userInput2) ;


if(num1 > num2){
    console.log(num1 + " is greater than " + num2)
}
else if(num1 < num2){
    console.log(num1 + " is less than " + num2)
}   
else{
    console.log(num1 + " is equal to " + num2)
}