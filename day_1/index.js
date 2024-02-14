console.log("Hello World");

//creating variable
let firstName = "Jefferson";
let lastName = "Santos";
console.log(firstName);
console.log(lastName);

//creating constants
const fullName = "Jefferson Santos";
//fullName = "Wrong way";
console.log(fullName);

//primitives types variable
let number = 1
let string = "text"
let boolean = true 
let notDefined //undefined
let notDefined2 = undefined
let notExist = null 

// reference types variable

//Object
let pen = {
    itemName: "Pen",
    itemPrice: 3,
    itemAvailable: true,
    itemColor: "Blue"
}

//Changing properties from object
pen.itemColor = "Red"

//Arrays
let friends = ["Caio", "Diego", "Douglas"]

//Functions
function saleStatus(status){
    console.log("Transaction " + status)
}

saleStatus("Approved")

function percentage(price, amount){
    return price - (price * amount/100)
}

console.log(percentage(20,10))

// verify type
console.log(typeof notDefined)
console.log(typeof pen)