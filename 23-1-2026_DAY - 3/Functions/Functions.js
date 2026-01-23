const prompt = require('prompt-sync')();    

function Sum(a, b){
    return a + b;
}   

function Sub(a, b){
    return a - b;
}   

function Mult(a, b){
    return a * b;
}

function Div(a, b){
    if(b != 0){
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

let num1 = Number(prompt("enter num1 "));
let num2 = Number(prompt("enter num2 "));

console.log("1. Sum");
console.log("2. Sub");
console.log("3. Mult");
console.log("4. Div");
let opt = Number(prompt("Enter option "));

switch(opt){
    case 1:
        console.log("Sum: " + Sum(num1, num2));
        break;
    case 2:
        console.log("Sub: " + Sub(num1, num2));
        break;
    case 3:
        console.log("Mult: " + Mult(num1, num2));
        break;
    case 4:
        console.log("Div: " + Div(num1, num2));
        break;
    default:
        console.log("Invalid option");
}
