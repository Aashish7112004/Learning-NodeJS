//calculator using exception handling

const prompt = require('prompt-sync')();

function add(a,b){
    return a + b;
}       

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){  
    try{
        if(b == 0){
            throw new Error("Division by zero is not allowed");
        }
    }
    catch(err){   
        console.log(err.message);
     }
   
}

function main(){
    let opt = 0;

    console.log("1.add");
    console.log("2.sub");
    console.log("3.mult");
    console.log("4.div");
    opt = Number(prompt("Enter your option: "));    
    
    try
    {
        if(opt < 1 || opt > 4)
        {
            throw new Error("Invalid option enter between 1 to 4");
        }
        else
        {
            let a = Number(prompt("Enter first number: "));
            let b = Number(prompt("Enter second number: "));
            let result = 0;

            switch(opt){
                case 1:
                    console.log("Result: " + add(a,b));      
                    break;
                case 2:
                    console.log("Result: " + sub(a,b)); 
                    break;
                case 3:
                    console.log("Result: " + mult(a,b)); 
                    break;
                case 4:
                    console.log("Result: " + div(a,b)); 
                    break;
            }
        }
    }
    catch(err)
    {
        console.log(err.message);
        main();
    }
    finally
    {
        console.log("calculation completed.");
        console.log("enter 1 to calculate again ");
        console.log("enter 0 to exit ");

        let opt2 = Number(prompt("Enter your option: "));   

            if(opt2 == 1){
                main();
            } 
            else {
                console.log("exited");
            }

        return;
    }

}

main(); 
