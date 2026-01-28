//setting timeout to code and a function

//setting timeout to function
setTimeout(printAfter,4000)
function printAfter(){
    console.log("printing after some time");

}

function printBefore(){
    console.log("printing before ");
}

printBefore();


//timeOut for code
setTimeout(()=>{
    console.log("printing after some time");
},2000)

console.log("printing before time");


// clearTimeOut
 let print =  setTimeout(()=>{
        console.log("Time is 5 sec but print instently");
})

console.log("printing before time");
clearTimeout(print);