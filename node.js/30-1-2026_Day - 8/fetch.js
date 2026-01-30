const prompt = require('prompt-sync')();

function getUser(url){

    let req = fetch(url);

    req.then(response=>{
        return response.json();
    })
    .then(result=>{
        if(result.length === 0){
            console.log("no user found");
            main();
        }else
        console.log(result);  
        
    }).catch(error=>{
        console.log("catch");
        // console.log(error);
       
    })
}

function main(){
    let url = "http://localhost:3000/";

    // fetch(url)
    // .then(result=>{
    //     return result.json();
    // }).then(result=>{
    //     console.log(result);

    //     result.forEach((op,i) => {
    //         console.log(i + " " + op.name);
    //     });
    // })

    // console.log("List OF Operations");
    // console.log("1.Add ");
    // console.log("2.Search ");

    console.log("1.enter for users ");
    console.log("2.enter for products "); 
    opt = Number(prompt("enter opt"));

    if(opt == 1){
        url = url + "users?name=";

        url += prompt("enter name ")
        getUser(url);

    }else if(opt == 2){
        url = url + "products?itemName=";

        product = prompt("enter productname ");
        url = url + product;
        getUser(url)

    }
    
}

main();