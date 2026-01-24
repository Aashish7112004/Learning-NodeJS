console.log("        True table generation for Comparison Operators\n")

let num1 = "50"
let num2 = "50"
let numStr1 = " "+num1
let numStr2 = " "+num2    

//==,===,!=,!==,>,<,>=,<=

console.log("  values    num vs num   num vs string  string vs string")
console.log(num1+" ==  "+num2+"       "+Number((num1 == num2))  + "             "  + Number((num1 == numStr2)) +    "             "   + Number((numStr1 == numStr2) ))
console.log(num1+" === "+num2+"       "+Number((num1 === num2)) + "             "   + Number((num1 === numStr2))+   "             "   +Number( (numStr1 === numStr2)))
console.log(num1+" !=  "+num2+"       "+Number((num1 != num2))  + "             "   +Number( (num1 != numStr2))+    "             "   +Number( (numStr1 != numStr2) ))
console.log(num1+" !== "+num2+"       "+Number((num1 !== num2)) + "             "   +Number( (num1 !== numStr2)) +  "             "   +Number( (numStr1 !== numStr2)))
console.log(num1+"  >  "+num2+"       "+Number((num1 > num2) )  + "             "   +Number( (num1 > numStr2)) +    "             "   +Number( (numStr1 > numStr2)  ))
console.log(num1+"  <  "+num2+"       "+Number((num1 < num2) )  + "             "   +Number( (num1 < numStr2))  +   "             "   +Number( (numStr1 < numStr2)  ))
console.log(num1+" >=  "+num2+"       "+Number((num1 >= num2))  + "             "   +Number( (num1 >= numStr2))  +  "             "   +Number( (numStr1 >= numStr2)  ))
console.log(num1+" <=  "+num2+"       "+Number((num1 <= num2) ) + "             "   +Number( (num1 <= numStr2)) +   "             "   +Number( (numStr1 <= numStr2) ))





