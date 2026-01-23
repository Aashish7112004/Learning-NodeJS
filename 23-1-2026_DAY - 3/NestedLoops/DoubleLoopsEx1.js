
//in JS the console.log it print the each otput on new line by default\
//to print the output in straignt we need to use a value which is string and we need to print the string an the output will be in a sing lone

const prompt = require('prompt-sync')();

console.log("Nested Loops Example");

console.log("Star Pattern 1");
console.log("Star Pattern 2");
console.log("Star Pattern 3");
console.log("Star Pattern 4");
console.log("Star Pattern 5");
console.log("Star Pattern 6");
console.log("Star Pattern 7");

let opt = Number(prompt("Enter option "));

if(opt == 1){
    let row = Number(prompt("Enter rows "))
    let col = Number(prompt("Enter cols "))

    for(let i = 1; i <= row ;i++){

        let line = "";

        for(let j = 1; j<= col ;j++){

            line +="* ";

        }
        console.log(line);
    }
}
else if(opt == 2){

    let row = Number(prompt("Enter rows "))

    for(let i = 1; i <= row ;i++){

        let line = "";  

        for(let j = 1; j <= i;j++){

            line += "* ";

        }
        console.log(line);
    }
}
else if(opt == 3){

    let row = Number(prompt("Enter rows "))

    for(let i = row; i >= 1 ;i--){

        let line = "";  

        for(let j = i; j >= 1;j--){

            line += "* ";

        }
        console.log(line);
    }
}
