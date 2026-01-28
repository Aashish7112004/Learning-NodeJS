function prime(value){
    
    let range = value;
    let prime = 0;

    for(let i = 1; i <=range ; i++){
        for(let j = 1; j <= Math.sqrt(i) ; j++){
            if(i % j == 0){
                prime++;
            }
        }

        if(prime == 1){
            console.log(i);
        }

        prime = 0;
    }
}

function fibnacci(value){

    let num1 = 0;
    let num2 = 1;

    let range = value;
    let series = 0;

    for(let i = 1; i <= range ; i ++){
        series = num1 + num2;

        num1 = num2;
        num2 = series;

        console.log(series);
    }
    

}

module.exports = {
    prime,
    fibnacci
}