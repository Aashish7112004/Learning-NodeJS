


//               highorder functions for array 
//                                          function    return type
// Create a array of the array,               map,       New Array
// Create a array with an condiation,         filter,    New Array
// Check if any number follow a condition,    some,      Boolean
// Print the numbers from array,              forEach,   undefined
// Check if all number matche a condition,    every,     Boolean
// Add a number to end	                      push()	 New length
// Remove a number from end                   pop()	     Removed element
//combine two or more arrays	              concat()	 New array

let array = [2,4,1,3,5,6,7,8,9,10,12,11];

console.log("Original Array: " + array);    

//map
let mapArray = array.map(function(value){
    return value * 2;
});
console.log("Multliped by 2 " + mapArray);   

//filter
let even = array.filter(function(value){
    return value % 2 == 0;
});
console.log("Even Numbers: " + even);

//some
let someArray = array.some(function(value){
    return value < 7;
});
console.log("Some less than 7: " + someArray);     

//foreach
array.forEach(function(value){
    console.log("numbers in array" + value);
});

//every
let everyArray = array.every(function(value){
    return value < 10;
});
console.log("Every less than 10: " + everyArray);

//push
array.push(13);
console.log("after push " + array); 

//pop
array.pop();    
console.log("after pop " + array);  

//concat    
let array2 = [14,15,16];
let mergeArray = array.concat(array2);
console.log("after concat " + mergeArray);