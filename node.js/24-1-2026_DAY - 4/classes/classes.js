
class calculator{

    constructor(){
        this.result = 0;
    }

    add(a,b){
        this.result = a + b;
        return this.result;
    }

    sub(a,b){
        this.result = a - b;
        return this.result;
    }

    mult(a,b){
        this.result = a * b;
        return this.result;
    }

    div(a,b){
        if(b != 0){
            this.result = a / b;
            return this.result;
        } else {
            return "Error: Division by zero";
        }
    }

}


let calc = new calculator();    
console.log("add " + calc.add(10,5));
console.log("sub " + calc.sub(10,5));
console.log("mult " + calc.mult(10,5));
console.log("div " + calc.div(10,5));