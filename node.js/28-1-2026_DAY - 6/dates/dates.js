// new Date()
// new Date(date)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)


//current date and time
let date1 = new Date();
console.log("Current Date and Time: " + date1);

//date for specific date
let date2 = new Date("2023-01-01");
console.log("Entered date " + date2);

//date for year
let date3 = new Date(); 
console.log("Year: " + date3.getFullYear());

//date for day month year
let date4 = new Date();
console.log("Date: " + date4.getDate() + "-" + (date4.getMonth() + 1) + "-" + date4.getFullYear()); 

//date for hours minutes seconds
let date5 = new Date(); 

console.log("Time: " + date5.getHours() + ":" + date5.getMinutes() + ":" + date5.getSeconds() );

//date for hours minutes seconds milliseconds
console.log("Time: " + date5.getHours() + ":" + date5.getMinutes() + ":" + date5.getSeconds() + ":" + date5.getMilliseconds());



