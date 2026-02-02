let url = "http://localhost:3000/users"

function addUser(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gmail = document.getElementById("gmail").value;
    let number = document.getElementById("number").value;
    
    let data = {
        "name" : name,
        "phone" : number,
        "gmail" : gmail 
    };

    let addUsers = {
        method : "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    };

    fetch(url,addUsers)
    .then((response) => {
        return response.json();
    }).then(result=>{
        console.log(result);
    }).catch(error =>{
        console.log("error",error);
    })

    printUsers();

}


function printUsers() {
    
    console.log("from function");
    fetch(url)
    .then((response) => {
        return response.json();

    }).then(result=>{
        console.log(result);
        let userHtml = "";
        let data = result;
        for(let i of data){
            console.log(i)
            userHtml += `
            <tr >  
            
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;" >${i['id']}</td>
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;">${i['name']}</td>
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;">${i['gmail']}</td>
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;">${i['phone']}</td>
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;">delete</td>
                <td style="padding: 12px; color: #333;border: 1px solid #ddd;">edit</td>


            </tr>
            `    
        }
        document.getElementById("data").innerHTML = userHtml;

    }).catch(error =>{
        console.log("error",error);
    })
    
}