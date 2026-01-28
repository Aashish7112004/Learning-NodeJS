
let sum = 0;

let print = setInterval(() =>{

    console.log("hello " + sum);

    sum = sum + 1;

    if(sum == 10){
        clearInterval(print);
        // return 0;
    }
},1000)
