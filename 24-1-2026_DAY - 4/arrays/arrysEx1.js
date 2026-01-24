
const prompt = require('prompt-sync')();
console.log("Arrays in JavaScript");

//CURD = create update(push,insert) read(search,find) delete(pop,remove)

let array = [];

//display
function display(){

    console.log("numbers in array ");

    if(array.length < 0){
        console.log("array is empty");
        menu();
    }
    else{
        console.log(" "+array); 
    }

    menu();

}

//create
function create(){

    let size = 0;
    size = Number(prompt("Enter size of array ")); 

    for(let i = 0 ; i < size ; i++){
        let number = Number(prompt("enter number " + (i + 1) + " "));
        array.push(number);
    }

    display();
}

//insert
function insert(){

    let number = Number(prompt("enter number to insert "));
    array.push(number);

    console.log(number + " inserted ");
    console.log("after inserting new array is");

    display();
    menu();     
}

//remove
function remove(){

    let remove = 0;
    remove = Number(prompt("enter number to delete "));
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == remove){
            array[i] = undefined
            console.log(remove + " deleted ");
            break;
        }
    }   

    console.log("after deleting new array is"); 
    display();
}

//search
function search(){

    let number = Number(prompt("enter number to search "));

    let find = 0;

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == number){
            find = 1;
            console.log(number + " number found at " + (i + 1));
            break;
        }
    }
    if (find == 0){
        console.log(number + "no number in array ");
    }   

    menu();
}

//menu
function menu(){
    
    let opt = 0;    

    console.log("1. Create Array")
    console.log("2. Insert Number");       
    console.log("3. Delete Number");
    console.log("4. Search Number");
    console.log("5. Display Numbers");

    opt = Number(prompt("Enter opt "))

    if(opt == 1){
        create();
    }   
    else if(opt == 2){
        insert();
    }
    else if(opt == 3){
        remove();
    }   
    else if(opt == 4){
        search();
    }   
    else if(opt == 5){
        display();
    }   
    else{
        console.log("worng opt");
    }               

}

menu();