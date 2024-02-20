//creating functions

//Function Declaration
function movie(){
    console.log("The Godfather")
}

movie()

//Function Expression
const car = function() {
    console.log("Tesla")
}

car()

const truck = car
truck()

//Hoisting is when Javascript moves functions up to the thop first.


//Function with parameters

function price(a, b) {
    return a + b
}

console.log(price(2,3))

//Function with arguments

function sum() {
    let total = 0
    for(let value of arguments) {
        total += value
    }

    return total
}

console.log(sum(10,20,30,40,50))

//Function with default parameters
function carLoan(loan, rate = 2.9, years = 5) {
    return loan * rate / 100 *years
}

console.log(carLoan(20000,2.5))