console.log("'this' keyword in JavaScript");

function carDetails(){

    console.log("Car Name: " + this.name);
    console.log("Car Model: " + this.model);
    console.log("Car Type: " + this.type);
    console.log("Car Price: " + this.price);

}

const car1 ={
    name: "carA",   
    model: 2020,
    type: "4WD",
    price: 50000,   

    // showdetails:function(){
    //     console.log(this.name);
    //     console.log(this.model);
    //     console.log(this.type);
    // }

}

const car2 ={
    name: "carB",   
    model: 2021,
    type: "4WD",
    price: 60000,   

    // showdetails:function(){
    //     console.log(this.name);
    //     console.log(this.model);
    //     console.log(this.type);
    // }

}

const car3 ={
    name: "carC",   
    model: 2023,
    type: "4WD",
    price: 50000,   

    // showdetails:function(){
    //     console.log(this.name);
    //     console.log(this.model);
    //     console.log(this.type);
    // }

}

carDetails.call(car1);
// car2.showdetails(); 


//WRONG WAY OF USING THIS
function value(a, b){

    this.a = 4;
    this.b = 6;
    console.log("Value of a: " + a);
    console.log("Value of b: " + b);
    console.log(this.a);
    console.log(this.b);

}
// value(12,10);

    