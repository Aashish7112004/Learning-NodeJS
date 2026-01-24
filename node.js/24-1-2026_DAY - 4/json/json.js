
console.log("JSON in JavaScript");

let deteils = {
    "name" : "person1",
    "age" : 24,
    "gender" : "male",
    "address": {
        "city" : "city1",
        "state" : "state1",
        "country" : "country1"
    },  
    "phoneNumber" : [
        {
            "number" : "1234567890"
        },
        {
            "number" : "0987654321"
        }
    ]

}
console.log("name " + deteils.name);
console.log("adress city " + deteils.address.city);
console.log("number " + deteils.phoneNumber[1].number);