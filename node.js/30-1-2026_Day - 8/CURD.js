
const prompt = require('prompt-sync')();

function addUser(url){

    let name = prompt("Enter name :");
    let phone = prompt("Enter phone :");
    let gmail = prompt("Enter gmail :");
    let address = prompt("Enter adress :");

    let details = {
                "name" : name,
                "phone" : phone,
                "gmail" : gmail,
                "address":address
            };

    let users = {
        method : "POST",
        body: JSON.stringify(details)
    }

    fetch(url,users)
    .then(result=>{
        console.log("added");
        return result;
    }).then(result=>{
        return result.json();
    }).then(result=>{
        console.log(result);
        main();

    })

}

function updateUser(url){
    
    console.log("1 to change name :");
    console.log("2 to change gamil :");
    console.log("3 to change phoen :");
    console.log("4 to change address :");
    
    let opt = Number(prompt("enter opt"));
    let id = prompt("enter id");
    let data = prompt("enter new data :");
    let details;
 
    if(opt == 1){
        details={"name" : data};
    }
    else if(opt == 2){
        details={"gmail" : data};
    }
    else if(opt == 3){
        details={"phone" : data};
    }
    else if(opt == 4){
        details={"address" : data};
    }

    url = url + "/" + id;
    console.log(url);

  

    let users = {
        method : "PATCH",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        body: JSON.stringify(details)
    }

    fetch(url,users)
    .then(result=>{
        return result.json();
    }).then(result=>{
        console.log(result);
    })

    main();


}


function searchUser(url){

    let name = prompt("Enter name :");
    url = url + "?name" + name;

    fetch(url)
    .then(result=>{
        return result.json();
    }).then(result=>{
        console.log(result);
    })

    main();
    
}


function removeUser(url){

    let id = prompt("enter id ");
    
    url = url+"/"+id;

    let del = {
        method : "DELETE",
    }

    fetch(url,del)
    .then(result=>{
        return result.json();
    }).then(result=>{
        console.log(result);
    })

    main();

    
}

function main(){

    let url = "http://localhost:3000/users"

    console.log("1 addUser");
    console.log("2.update")
    console.log("3.search")
    console.log("4 removeUser");
    
    let opt = Number(prompt("enter opt"));

    if(opt == 1){
        addUser(url);
    }
    else if(opt == 2){
        updateUser(url);
    }
    else if(opt == 3){
        searchUser(url);
    }
    else if(opt == 4){
        removeUser(url);
    }

}
main();