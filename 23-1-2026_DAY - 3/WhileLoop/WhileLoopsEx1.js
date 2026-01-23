const prompt = require('prompt-sync')();

console.log("While Loop Example:");

console.log("1. Print numbers from 1 to n");   
console.log("2. Print numbers from n to 1") 
console.log("3. Print even numbers from 1 to n");
console.log("4. Print even numbers from n to 1");
console.log("5. Print odd numbers from 1 to n");   
console.log("6. Print odd numbers from n to 1");    


let opt = Number(prompt("Enter an option from above "));


switch(opt){

    //num from 1-n 
    case 1:
        let num = Number(prompt("Enter n "));
        let i = 1;

        while(i <= num){
            console.log(" " + i);
            i++;
        }   
    break;

    //num from n-1
    case 2:
        let num2 = Number(prompt("Enter n "));
        let j = num2;

        while(j >= 1){
            console.log(" " + j);
            j--;
        }   
    break;

    // even num from 1-n    
    case 3:
        let num3 = Number(prompt("Enter n "));
        let k = 1;

        while(k <= num3){
            if(k % 2 == 0){
                console.log(" " + k);
            }
            k++;
        }   
    break;

    // even num from n-1
    case 4:
        let num4 = Number(prompt("Enter n "));
        let l = num4;

        while(l >= 1){
            if(l % 2 == 0){
                console.log(" " + l);
            }
            l--;
        }
    break;

    // odd num from 1-n 
    case 5:
        let num5 = Number(prompt("Enter n "));
        let m = 1;

        while(m <= num5){
            if(m % 2 != 0){
                console.log(" " + m);
            }
            m++;
        }
    break;  

    // odd num from n-1
    case 6:
        let num6 = Number(prompt("Enter n "));
        let n = num6;

        while(n >= 1){
            if(n % 2 != 0){
                console.log(" " + n);
            }
            n--;
        }
    break;
    
    //End
    default:
        console.log("Wrong Option");

}

