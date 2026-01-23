const prompt = require('prompt-sync')();

console.log("Code for tables")
let userInput = prompt("Enter a Number: "); 
let userInput2 = prompt("Enter number to multiples: "); 

let num = Number(userInput);  
let mult = Number(userInput2);  

for(let i = 1; i <= mult; i++){

    let output = num * i;
    console.log(num + "*" + i + " = " + output);        

}