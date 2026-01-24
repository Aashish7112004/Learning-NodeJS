console.log("           Articmetic Operators\n")
console.log("List of Articmetic Operators: +, -, *, /, %, ++, --, **\n")

let num1 = 3
let num2 = 4

let sum = num1 + num2
console.log("Sum of " +num1 + "+" + num2 + " = " + sum + "\n")  

let minus = num2 - num1
console.log("Minus of " +num1 + "-" + num2 + " = " + minus + "\n")

let mult = num1 * num2
console.log("Multiply of " +num1 + "*" + num2 + " = " + mult + "\n")

let mod = num2 % num1
console.log("Modulus of " +num1 + "*" + num2 + " = " + mod + "\n") 

let div = num1 / num2   
console.log("Divide of " +num1 + "/" + num2 + " = " + div.toFixed(1))   
console.log("Divide1 of " +num1 +"/" + num2 + " = " + div + "\n")  
        
console.log("preIncrement of " + "++"+ num1+ " is "+ ++num1)  
console.log("postIncrement of "  + num1+ "++ is "+ num1++)
console.log("after postIncrement: " + num1 + "\n")

let decrement = 4
console.log("preDecrement of " + "--"+ num1+ " is "+ --decrement)
console.log("postDecrement of "  + num1+ "-- is "+ decrement--)
console.log("after postDecrement: " + decrement + "\n")      

let Exponentiation = 2
let value = 3
console.log("Exponentiation of 2^" + value +": " +Exponentiation**value)   