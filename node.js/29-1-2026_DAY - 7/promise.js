//Promises in js

// let p = new Promise((resolve,reject)=>{});
// console.log(p);


let func = function(resolve,reject){
    let state = false
    if(state == false){
        console.log("state is false");

    }
    else{
        console.log("state is true");
    }
}

// let p = new Promise(func)

// console .log(p);

let p2 = new Promise((resolve,reject)=>{
    let state = false
    if(state == false){
        console.log("iam failed");
        reject("fails");
    }
    else{
    console.log("iam passed");
    resolve("pass");

    }
})

// console.log(p2);

p2.then(output=>{
    console.log("status passes");
    console.log(output);
}).catch(error=>{
    console.log("status failed");
    console.log(error);
}).finally(()=>{
    console.log("completed");
})