class calculator{
    constructor(){
        this.result = 0;
    }

    add(a,b){
        this.result = a + b;
        return this.result;
    }
}

class sub extends calculator{
    sub(a,b){
        this.result = a - b;
        return this.result;
    }
}

class mult extends calculator{
    mult(a,b){
        this.result = a * b;
        return this.result;
    }
}       

class div extends calculator{
    div(a,b){
        if(b != 0){
            this.result = a / b;
            return this.result;
        } else {
            return "Error: Division by zero";
        }
    }
}


let divide = new div();  
let addition = new calculator();
let subtraction = new sub();    
let multiplication = new mult(); 

console.log("mult " + multiplication.mult(10,5));        
console.log("add " + addition.add(10,5));
console.log("sub " + subtraction.sub(10,5));
console.log("div " + divide.div(10,5)); ;