function sum(a , b){
    return a + b;
}

function sub(a , b){
    return a - b;
}

function mult(a , b){
    return a * b;

}

function div(a , b){

    if(a == 0){
        console.log("cant divide by  zero");
    }
    return a / b;

}

export{
    sum,
    sub,
    div,
    mult
}