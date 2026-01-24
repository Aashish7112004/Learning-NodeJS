//use prompt in single only
// const prompt = require("prompt-sync")(); <== WRONG

const prompt = require('prompt-sync')(); // <== CORRECTC


console.log("1. Print numbers from 1 to n");   
console.log("2. Print numbers from n to 1") 
console.log("3. Print even numbers from 1 to n");
console.log("4. Print even numbers from n to 1");
console.log("5. Print odd numbers from 1 to n");   
console.log("6. Print odd numbers from n to 1");  
console.log("7. Print factorial of a number");
console.log("8. Print Fibonacci series 1 to n");

let userInput = prompt("Enter your option (1-8): ");    
let opt = Number(userInput);

//numbers from 1 to n
if(opt == 1){
    let n = Number(prompt("Enter n: "));
    for(let i = 1; i <= n; i++){
        let op = " "+i;
        console.log(op );
    }
}

// numbers from n to 1          
else if(opt == 2){
    let n = Number(prompt("Enter n: "));
    for(let i = n; i >= 1; i--){
        let op = " "+i;
        console.log(op );
    }
} 

// even numbers from 1 to n 
else if(opt == 3){
    let n = Number(prompt("Enter n: "));
    for(let i = 1; i <= n; i++){
        let op;
        if(i % 2 == 0){
            op = " "+i;    
            console.log(op);
        }
    }
}  

// even numbers from n to 1 
else if(opt == 4){
    let n = Number(prompt("Enter n: "));
    for(let i = n; i >= 1; i--){
        let op;
        if(i % 2 == 0){
            op = " "+i; 
            console.log(op);
        }
    }
}   

// odd numbers from 1 to n  
else if(opt == 5){
    let n = Number(prompt("Enter n: "));
    for(let i = 1; i <= n; i++){
        let op;
        if(i % 2 != 0){
            op = " "+i;
            console.log(op);
        }
    }
}   

// odd numbers from n to 1  
else if(opt == 6){
    let n = Number(prompt("Enter n: "));
    for(let i = n; i >= 1; i--){
        let op;
        if(i % 2 != 0){
            op = " "+i;
            console.log(op);
        }
    }
}  

// factorial of a number
else if(opt == 7){
    let n = Number(prompt("Enter n: "));
    let fact = 1;
    for(let i = 1; i <= n; i++){
        let op;
        fact = fact * i;
        op = ""+fact;
        console.log(op)
    }
}   

// Fibonacci series 1 to n
else if(opt == 8){
    let n = Number(prompt("Enter n: "));
    let a = 0, b = 1;
    let op;
    console.log("0");
    console.log("1");
    for(let i = 3; i <= n; i++){
        let c = a + b;
        op = ""+c;
        console.log(op);
        a = b;
        b = c;
    }
}   
else{
    console.log("Invalid option");
}
