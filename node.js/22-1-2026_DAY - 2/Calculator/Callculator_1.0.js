
const prompt = require('prompt-sync')();

let userInput1 = prompt("Enter first number: ");            
let userInput2 = prompt("Enter second number: ");

let num1 = Number(userInput1);      
let num2 = Number(userInput2);

console.log("\nSelect an what operation you want to perform: ");
console.log(" +  for Add");
console.log(" -  for Sub");     
console.log(" *  for Mult");  
console.log(" /  for Divn");    
console.log(" %  for Mod\n");

let operator = prompt("Enter option: ");
console.log(" ");  
let result;

    if(operator == '+'){
        result = num1 + num2;
        console.log(`           ${num1}
         + ${num2}
        -----------
        =  ${result}`);
    }
    else if(operator == '-'){
        result = num1 - num2;
        console.log(`           ${num1}
         - ${num2}
        -----------
         = ${result}`);
    }   
    else if(operator == '*'){
        result = num1 * num2;
        console.log(`           ${num1}
        * ${num2}
        -----------
        = ${result}`);
    }   
    else if(operator == '/'){
        if(num2 != 0){
            result = num1 / num2;
            console.log(`           ${num1} 
        ----------   =    ${result}
            ${num2}  `);
        } else {
            console.log("Zero Division Error");
        }
    }   
    else if(operator == '%'){
        result = num1 % num2;
        console.log(`            ${num1}
        -----------  =   ${result}
            ${num2}`);
    }   
    else{
        console.log("Invalid operator");
    }