//arithmetical operators
let num1 = 2
let num2 = 5

//plus
console.log(num1 + num2)
//minor
console.log(num1 - num2)
//division
console.log(num1 / num2)
//multiply
console.log(num1 * num2)
//rest
console.log(num1 % num2)
//power
console.log(num1 ** num2)

let total = num1 + num2

//increment
total++
console.log(total)

//decrement
total--
console.log(total)

//attribution operators
let newNumber = 5
newNumber+=20

//comparison operators
console.log(newNumber > 2)
console.log(newNumber < 0)
console.log(newNumber >= 25)
console.log(newNumber <= 5)
console.log(newNumber === 25)
console.log(newNumber !== 23)

//equality operators
let firstNumber = '1'
let secondNumber = 1

console.log(firstNumber == secondNumber) //verify only values <-- lose
console.log(firstNumber === secondNumber) //verify type and values <-- strict

//ternary operators
let driverSpeed = 90
let speedAllowed = driverSpeed > 110 ? 'Not Allowed' : 'Allowed'
console.log(speedAllowed) 

//logic operators
let hasMinimumAge = true
let hasElectoralCard = true

let canVote = hasMinimumAge && hasElectoralCard
let canTravel = !canVote
console.log(canVote)
console.log(canTravel)

//If else
if(driverSpeed > 110) {
    console.log("Your speed is too fast")
} else if(driverSpeed >= 40 && driverSpeed <= 110) {
    console.log("Your speed is Okay")
} else {
    console.log("Your speed is slow")
}

//Switch Case
let airport = 'JFK'

switch (airport) {
    case 'MCO':
        console.log("Orlando")
        break
    case 'JFK':
        console.log("John F Kennedy")
        break
    case 'SEA':
        console.log("Seatle")
        break
    default:
        console.log("Unknown")
}

// For Loop
for(let i = 0; i <= 10; i++){
    console.log(i)
}

//While Loop
let num = 11
while(num <= 20) {
    console.log(num)
    num++
}

//Do While Loop
do{
    console.log(num)
    num++
} while(num <= 30)

//For in Loop
const myCar = {
    model: 'Mercedes',
    year: 2023,
    color: 'Black'
}

for(let i in myCar) {
    console.log(i, myCar[i])
}

// For of Loop
const friends = ['Stefani', 'Caio', 'Douglas']
for(let i of friends){
    console.log(i)
}
